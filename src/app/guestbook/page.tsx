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

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leave Your Mark
            </h1>
            <p className="text-base text-[var(--ds-gray-700)] mb-4">
              Share a thought, leave a message, or just say hello
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-[var(--ds-gray-500)]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>
                  {entries.length} message{entries.length !== 1 ? "s" : ""}
                </span>
              </div>
              <span>•</span>
              <span>Secure & Private</span>
              <span>•</span>
              <span>Real-time</span>
            </div>
          </div>
        </section>

        {/* Authentication Section */}
        {!user ? (
          <section className="mb-16 max-w-md mx-auto">
            <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-6">
                Sign In to Leave a Message
              </h2>
              <p className="text-[var(--ds-gray-900)] mb-6">
                Please sign in with your Google or GitHub account to leave a
                message in the guestbook.
              </p>

              {/* Authentication Error Alert */}
              {authError && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
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

              <div className="space-y-4">
                <button
                  onClick={signInWithGoogle}
                  className="w-full bg-white border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center gap-3"
                >
                  <FaGoogle className="text-red-500" />
                  Sign in with Google
                </button>

                <button
                  onClick={signInWithGithub}
                  className="w-full bg-gray-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-3"
                >
                  <FaGithub />
                  Sign in with GitHub
                </button>
              </div>

              {/* Help Text */}
              <div className="mt-6 text-sm text-[var(--ds-gray-600)]">
                <p className="mb-2">
                  <strong>Having trouble signing in?</strong>
                </p>
                <ul className="text-left space-y-1">
                  <li>• Make sure popups are allowed in your browser</li>
                  <li>• Try signing in with a different method</li>
                  <li>• Check your internet connection</li>
                  <li>• If you have multiple accounts, try the other one</li>
                </ul>
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* User Info */}
            <section className="mb-8 max-w-2xl mx-auto">
              <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-12 h-12 rounded-full"
                      />
                    )}
                    <div>
                      <h3 className="font-semibold text-lg">
                        Welcome, {user.displayName || user.email?.split("@")[0]}
                        !
                      </h3>
                      <p className="text-sm text-[var(--ds-gray-600)]">
                        {user.email}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="text-red-500 hover:text-red-700 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <FaSignOutAlt />
                    Sign Out
                  </button>
                </div>
              </div>
            </section>

            {/* Add New Entry Form */}
            <section className="mb-16 max-w-2xl mx-auto">
              <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <FaPaperPlane className="text-blue-500" />
                  Leave a Message
                </h2>

                {/* Error Message */}
                {error && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm">
                      <strong>Error:</strong> {error}
                    </p>
                  </div>
                )}

                {/* Success Message */}
                {success && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm">
                      <strong>Success:</strong> {success}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
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
                      className="w-full px-4 py-2 border border-[var(--ds-gray-200-value)] rounded-lg bg-[rgba(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="Share your thoughts..."
                      required
                      maxLength={500}
                    />
                    <div className="text-right text-sm text-[var(--ds-gray-500)] mt-1">
                      {newEntry.message.length}/500
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
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
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold flex items-center gap-3">
              <FaComments className="text-green-500" />
              Recent Messages
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
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
                  className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6"
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
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {entry.userPhotoURL ? (
                            <img
                              src={entry.userPhotoURL}
                              alt={entry.name}
                              className="w-10 h-10 rounded-full"
                            />
                          ) : (
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                              <FaUser className="text-white text-sm" />
                            </div>
                          )}
                          <div>
                            <h3 className="font-semibold">{entry.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-[var(--ds-gray-900)]">
                              <FaCalendar className="text-xs" />
                              {formatDate(entry.createdAt)}
                              <span className="text-xs text-[var(--ds-gray-500)]">
                                • {formatRelativeTime(entry.createdAt)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleEdit(entry)}
                            className="text-blue-500 hover:text-blue-700 transition-colors p-1"
                            title="Edit message"
                          >
                            <FaEdit className="text-sm" />
                          </button>
                          <button
                            onClick={() => handleDelete(entry.id)}
                            className="text-red-500 hover:text-red-700 transition-colors p-1"
                            title="Delete message"
                          >
                            <FaTrash className="text-sm" />
                          </button>
                        </div>
                      </div>

                      <div className="text-[rgb(var(--color-foreground))] leading-relaxed">
                        <p>
                          {expandedMessages.has(entry.id)
                            ? entry.message
                            : truncateMessage(entry.message)}
                        </p>
                        {entry.message.length > 200 && (
                          <button
                            onClick={() => toggleMessageExpansion(entry.id)}
                            className="text-blue-500 hover:text-blue-700 text-sm font-medium mt-2 transition-colors"
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

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">
              Ready to Start a Conversation?
            </h2>
            <p className="mb-6 max-w-md mx-auto">
              Let's connect! Whether you have a question, want to collaborate,
              or just want to say hello, I'd love to hear from you.
            </p>
            <a
              href="/about"
              className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guestbook;
