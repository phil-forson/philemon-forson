"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  User,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  AuthError,
  GithubAuthProvider,
  fetchSignInMethodsForEmail,
  linkWithCredential,
} from "firebase/auth";
import { auth, googleProvider, githubProvider } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithGithub: () => Promise<void>;
  logout: () => Promise<void>;
  authError: string | null;
  clearAuthError: () => void;
  isLinkingAccount: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);
  const [isLinkingAccount, setIsLinkingAccount] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const getErrorMessage = (error: AuthError): string => {
    switch (error.code) {
      case "auth/account-exists-with-different-credential":
        return "An account already exists with the same email address but different sign-in credentials. Please try signing in with a different method.";
      case "auth/user-not-found":
        return "No account found with this email address. Please sign up first.";
      case "auth/wrong-password":
        return "Incorrect password. Please try again.";
      case "auth/email-already-in-use":
        return "This email is already registered. Please try signing in instead.";
      case "auth/weak-password":
        return "Password is too weak. Please choose a stronger password.";
      case "auth/invalid-email":
        return "Invalid email address. Please check your email and try again.";
      case "auth/popup-closed-by-user":
        return "Sign-in was cancelled. Please try again.";
      case "auth/popup-blocked":
        return "Sign-in popup was blocked. Please allow popups and try again.";
      case "auth/network-request-failed":
        return "Network error. Please check your internet connection and try again.";
      case "auth/too-many-requests":
        return "Too many failed attempts. Please try again later.";
      case "auth/operation-not-allowed":
        return "This sign-in method is not enabled. Please contact support.";
      default:
        return `Authentication error: ${error.message}`;
    }
  };

  const signInWithGoogle = async () => {
    try {
      setAuthError(null);
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
      const errorMessage = getErrorMessage(error as AuthError);
      setAuthError(errorMessage);
    }
  };

  const signInWithGithub = async () => {
    setAuthError(null);
    setIsLinkingAccount(false);

    // Ensure GitHub returns email
    githubProvider.addScope("user:email");

    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error: any) {
      console.error("Error signing in with GitHub:", error);

      // Handle the specific case where account exists with different credential
      if (error.code === "auth/account-exists-with-different-credential") {
        const email = error.customData?.email;
        const pendingCred = GithubAuthProvider.credentialFromError(error);

        if (email && pendingCred) {
          try {
            // Check what sign-in methods are available for this email
            const methods = await fetchSignInMethodsForEmail(auth, email);

            if (methods.includes("google.com")) {
              setIsLinkingAccount(true);
              setAuthError(
                `An account with ${email} already exists with Google. Please sign in with Google first, then we'll link your GitHub account.`
              );

              // Sign in with Google
              const googleResult = await signInWithPopup(auth, googleProvider);

              // Link the pending GitHub credential to the existing user
              await linkWithCredential(googleResult.user, pendingCred);

              setIsLinkingAccount(false);
              setAuthError(
                "Successfully linked GitHub account! You can now use either Google or GitHub to sign in."
              );

              // Clear success message after 3 seconds
              setTimeout(() => {
                setAuthError(null);
              }, 3000);
            } else {
              setAuthError(
                `An account with ${email} exists but uses a different sign-in method. Please contact support.`
              );
            }
          } catch (linkError: any) {
            console.error("Error linking accounts:", linkError);
            setIsLinkingAccount(false);
            setAuthError(
              "Failed to link accounts. Please try again or contact support."
            );
          }
        } else {
          setAuthError(
            "Unable to link accounts. Please try signing in with Google first."
          );
        }
      } else {
        // Handle other errors
        const errorMessage = getErrorMessage(error as AuthError);
        setAuthError(errorMessage);
      }
    }
  };

  const logout = async () => {
    try {
      setAuthError(null);
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      setAuthError("Error signing out. Please try again.");
    }
  };

  const clearAuthError = () => {
    setAuthError(null);
  };

  const value = {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    logout,
    authError,
    clearAuthError,
    isLinkingAccount,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
