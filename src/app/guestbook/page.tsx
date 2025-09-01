"use client";
import React, { useState, useEffect } from "react";
import {
  FaComments,
  FaUser,
  FaHeart,
  FaCalendar,
  FaPaperPlane,
  FaTrash,
  FaEdit,
  FaGoogle,
  FaGithub,
  FaSignOutAlt,
} from "react-icons/fa";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { guestbookService, GuestbookEntry } from "@/services/guestbookService";
import { testFirebaseConnection } from "@/lib/firebase-test";

const Guestbook = () => {
  const {
    user,
    loading,
    signInWithGoogle,
    signInWithGithub,
    logout,
    authError,
    clearAuthError,
  } = useAuth();
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [newEntry, setNewEntry] = useState({ message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ message: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [connectionTest, setConnectionTest] = useState<any>(null);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState<
    "success" | "error" | "info"
  >("info");
  const [expandedMessages, setExpandedMessages] = useState<Set<string>>(
    new Set()
  );

  const showNotificationMessage = (
    message: string,
    type: "success" | "error" | "info" = "info"
  ) => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);

    // Auto-hide after 5 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
  };

  // Test Firebase connection on component mount
  useEffect(() => {
    const runConnectionTest = async () => {
      const result = await testFirebaseConnection();
      setConnectionTest(result);
    };
    runConnectionTest();
  }, []);

  // Load entries from Firestore
  useEffect(() => {
    const loadEntries = async () => {
      try {
        setIsLoading(true);
        setError(null);
        console.log("Loading entries...");
        const messages = await guestbookService.getMessages();
        console.log("Loaded messages:", messages);
        setEntries(messages);
      } catch (error) {
        console.error("Error loading messages:", error);
        setError(`Failed to load messages: ${(error as Error).message}`);
      } finally {
        setIsLoading(false);
      }
    };

    loadEntries();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !newEntry.message.trim()) return;

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      console.log("Submitting message with user:", user);

      const messageData = {
        name: user.displayName || user.email?.split("@")[0] || "Anonymous",
        message: newEntry.message.trim(),
        userId: user.uid,
        userEmail: user.email || "",
        userPhotoURL: user.photoURL || undefined,
        likes: 0,
      };

      console.log("Message data:", messageData);

      const messageId = await guestbookService.addMessage(messageData);
      console.log("Message added with ID:", messageId);

      // Reload messages
      const messages = await guestbookService.getMessages();
      setEntries(messages);

      setNewEntry({ message: "" });
      setSuccess("Message posted successfully!");
      showNotificationMessage("Message posted successfully!", "success");

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (error) {
      console.error("Error adding message:", error);
      setError(`Failed to post message: ${(error as Error).message}`);
      showNotificationMessage(
        `Failed to post message: ${(error as Error).message}`,
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!user) return;

    // Only allow users to delete their own messages
    const entry = entries.find((e) => e.id === id);
    if (entry && entry.userId !== user.uid) {
      alert("You can only delete your own messages.");
      return;
    }

    if (confirm("Are you sure you want to delete this message?")) {
      try {
        await guestbookService.deleteMessage(id);
        setEntries(entries.filter((entry) => entry.id !== id));
      } catch (error) {
        console.error("Error deleting message:", error);
      }
    }
  };

  const handleEdit = (entry: GuestbookEntry) => {
    if (!user || entry.userId !== user.uid) {
      alert("You can only edit your own messages.");
      return;
    }

    setEditingId(entry.id);
    setEditForm({ message: entry.message });
  };

  const handleEditSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editForm.message.trim()) return;

    try {
      await guestbookService.updateMessage(editingId!, {
        message: editForm.message.trim(),
      });

      setEntries(
        entries.map((entry) =>
          entry.id === editingId
            ? { ...entry, message: editForm.message.trim() }
            : entry
        )
      );

      setEditingId(null);
      setEditForm({ message: "" });
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  const handleEditCancel = () => {
    setEditingId(null);
    setEditForm({ message: "" });
  };

  const toggleMessageExpansion = (messageId: string) => {
    setExpandedMessages((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(messageId)) {
        newSet.delete(messageId);
      } else {
        newSet.add(messageId);
      }
      return newSet;
    });
  };

  const truncateMessage = (message: string, maxLength: number = 200) => {
    if (message.length <= maxLength) return message;
    return message.substring(0, maxLength).trim() + "...";
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return "Just now";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatRelativeTime = (timestamp: any) => {
    if (!timestamp) return "Just now";

    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    return "Just now";
  };

  if (loading) {
    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        <Nav />
        <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16 flex items-center justify-center">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 max-w-sm">
          <div
            className={`p-4 rounded-lg shadow-lg border ${
              notificationType === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : notificationType === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : "bg-blue-50 border-blue-200 text-blue-800"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium">
                  {notificationType === "success" && "✓ Success"}
                  {notificationType === "error" && "✗ Error"}
                  {notificationType === "info" && "ℹ Info"}
                </p>
                <p className="text-sm mt-1">{notificationMessage}</p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="ml-2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>
          </div>
        </div>
      )}

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16 flex flex-col">
        {/* Hero Section */}
        <section className="text-center mb-3">
          <div className="max-w-3xl mx-auto">
            <h1 className=" font-bold mb-2">
              <span className="text-3xl lg:text-4xl text-[var(--ds-gray-900)]">
                Leave Your{" "}
              </span>
              <span className="text-blue-600 text-5xl lowercase">Mark.</span>
            </h1>
            {/* <p className="text-sm text-[var(--ds-gray-700)] mb-3">
              Share a thought, leave a message, or just say hello
            </p> */}
            <div className="flex items-center justify-center gap-3 text-xs text-[var(--ds-gray-500)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>
                  {entries.length} message{entries.length !== 1 ? "s" : ""}
                </span>
              </div>
              <span>•</span>
              <span>Secure & Private</span>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        {!user ? (
          <section className="mb-8">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold mb-3">Join the Conversation</h2>
              <p className="text-[var(--ds-gray-700)] text-base leading-relaxed mb-6">
                Ready to leave your mark? Sign in with your preferred account
                and start sharing your thoughts with the community.
              </p>

              {/* Authentication Error Alert */}
              {authError && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-400 rounded-r-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="text-red-700 text-sm">
                        <strong>Authentication Error:</strong> {authError}
                      </p>
                    </div>
                    <button
                      onClick={clearAuthError}
                      className="ml-2 text-red-400 hover:text-red-600"
                      title="Dismiss error"
                    >
                      ×
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={signInWithGoogle}
                  className="bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>

                <button
                  onClick={signInWithGithub}
                  className="bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-3 shadow-sm hover:shadow-md"
                >
                  <FaGithub className="text-lg" />
                  Continue with GitHub
                </button>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* User Info */}
            <section className="mb-6 max-w-2xl mx-auto">
              <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-sm sm:text-base truncate">
                        Welcome, {user.displayName || user.email?.split("@")[0]}
                        !
                      </h3>
                      <p className="text-xs text-[var(--ds-gray-600)] truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="text-red-500 hover:text-red-700 flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-colors text-xs sm:text-sm"
                  >
                    <FaSignOutAlt className="text-xs sm:text-sm" />
                    <span className="hidden sm:inline">Sign Out</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Add New Entry Form */}
            <section className="mb-8 w-1/3 mx-auto">
              <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 flex items-center gap-3">
                  <FaPaperPlane className="text-blue-500" />
                  Leave a Message
                </h2>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">
                      <strong>Error:</strong> {error}
                    </p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="mb-4 p-3 sm:p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm">
                      <strong>Success:</strong> {success}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2 text-[var(--ds-gray-900)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={newEntry.message}
                      onChange={(e) =>
                        setNewEntry({ ...newEntry, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 border-[1.5px] border-[var(--ds-gray-200-value)] rounded-xl bg-[rgba(var(--color-background))] focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none transition-all duration-200 text-[var(--ds-gray-900)] placeholder-[var(--ds-gray-500)]"
                      placeholder="Share your thoughts, ideas, or just say hello..."
                      required
                      maxLength={500}
                    />
                    <div className="flex justify-between items-center text-sm text-[var(--ds-gray-500)] mt-2">
                      <span className="text-xs font-medium">
                        {newEntry.message.length}/500
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !newEntry.message.trim()}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </section>
          </>
        )}

        {/* Guestbook Entries */}
        <section className="flex-1">
          <div className="mb-6">
            <h2 className="text-lg sm:text-xl font-bold text-[var(--ds-gray-900)] flex items-center gap-3 mb-2">
              <FaComments className="text-green-500 text-lg sm:text-xl" />
              Recent Messages
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p>Loading messages...</p>
              </div>
            ) : entries.length === 0 ? (
              <div className="text-center py-12 text-[var(--ds-gray-500)]">
                <FaComments className="text-4xl mx-auto mb-4 opacity-50" />
                <p className="text-lg">
                  No messages yet. Be the first to leave one!
                </p>
              </div>
            ) : (
              entries.map((entry) => (
                <div
                  key={entry.id}
                  className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-xl p-4 sm:p-6 hover:shadow-md transition-all duration-200"
                >
                  {editingId === entry.id ? (
                    // Edit Form
                    <form onSubmit={handleEditSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <textarea
                          value={editForm.message}
                          onChange={(e) =>
                            setEditForm({
                              ...editForm,
                              message: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full px-3 py-2 border border-[var(--ds-gray-200-value)] rounded-lg bg-[rgba(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                          required
                          maxLength={500}
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={handleEditCancel}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  ) : (
                    // Display Entry
                    <>
                      <div className="flex items-start justify-between mb-3 sm:mb-4">
                        <div className="flex items-center gap-3 sm:gap-4">
                          {entry.userPhotoURL ? (
                            <img
                              src={entry.userPhotoURL}
                              alt={entry.name}
                              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[var(--ds-gray-100-value)] shadow-sm"
                            />
                          ) : (
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-sm">
                              <FaUser className="text-white text-sm sm:text-base" />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-sm sm:text-base text-[var(--ds-gray-900)] truncate">
                              {entry.name}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-[var(--ds-gray-600)]">
                              <FaCalendar className="text-xs" />
                              <span className="hidden sm:inline">
                                {formatDate(entry.createdAt)}
                              </span>
                              <span className="text-xs text-[var(--ds-gray-500)]">
                                {formatRelativeTime(entry.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                          {user && entry.userId === user.uid && (
                            <>
                              <button
                                onClick={() => handleEdit(entry)}
                                className="text-blue-500 hover:text-blue-700 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-blue-50"
                                title="Edit message"
                              >
                                <FaEdit className="text-xs sm:text-sm" />
                              </button>
                              <button
                                onClick={() => handleDelete(entry.id)}
                                className="text-red-500 hover:text-red-700 transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-red-50"
                                title="Delete message"
                              >
                                <FaTrash className="text-xs sm:text-sm" />
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="text-[rgb(var(--color-foreground))] leading-relaxed">
                        <p className="text-sm sm:text-base leading-6 sm:leading-7">
                          {expandedMessages.has(entry.id)
                            ? entry.message
                            : truncateMessage(entry.message)}
                        </p>
                        {entry.message.length > 200 && (
                          <button
                            onClick={() => toggleMessageExpansion(entry.id)}
                            className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-semibold mt-2 sm:mt-3 transition-colors hover:underline"
                          >
                            {expandedMessages.has(entry.id)
                              ? "Show Less"
                              : "Read More"}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guestbook;
