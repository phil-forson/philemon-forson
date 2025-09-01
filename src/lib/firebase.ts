import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBX933ZQk3F1y7EqQp7Ubn3wdRH_27cSY",
  authDomain: "phil.chat",
  projectId: "portfolio-ebf84",
  storageBucket: "portfolio-ebf84.firebasestorage.app",
  messagingSenderId: "103051119954",
  appId: "1:103051119954:web:6f0f783b5329d04d54fe8b",
  measurementId: "G-1HCEZHLJGV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Auth providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

export default app;
