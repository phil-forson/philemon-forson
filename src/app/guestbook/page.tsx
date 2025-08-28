"use client";
import React, { useState } from "react";
import {
  FaComments,
  FaHeart,
  FaUser,
  FaCalendar,
  FaPaperPlane,
} from "react-icons/fa";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  date: string;
  likes: number;
}

const Guestbook = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: 1,
      name: "Sarah Chen",
      message:
        "Love your portfolio design! The chat-style experience section is so creative. Great work!",
      date: "2024-01-15",
      likes: 12,
    },
    {
      id: 2,
      name: "Marcus Johnson",
      message:
        "Impressive technical skills and clean code structure. The dark/light theme toggle is smooth!",
      date: "2024-01-10",
      likes: 8,
    },
    {
      id: 3,
      name: "Aisha Patel",
      message:
        "Your data engineering background really shows in the way you structure information. Well done!",
      date: "2024-01-05",
      likes: 15,
    },
  ]);

  const [newEntry, setNewEntry] = useState({ name: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEntry.name.trim() || !newEntry.message.trim()) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      const entry: GuestbookEntry = {
        id: entries.length + 1,
        name: newEntry.name.trim(),
        message: newEntry.message.trim(),
        date: new Date().toISOString().split("T")[0],
        likes: 0,
      };

      setEntries([entry, ...entries]);
      setNewEntry({ name: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleLike = (id: number) => {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, likes: entry.likes + 1 } : entry
      )
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <main className="min-h-screen px-4 lg:px-36 py-8 lg:py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
            <FaComments className="text-white text-3xl" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Guestbook</h1>
          <p className="text-lg text-[var(--ds-gray-900)] max-w-2xl mx-auto">
            Leave a message, share your thoughts, or just say hello! I'd love to
            hear from you.
          </p>
        </section>

        {/* Add New Entry Form */}
        <section className="mb-16 max-w-2xl mx-auto">
          <div className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <FaPaperPlane className="text-blue-500" />
              Leave a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newEntry.name}
                  onChange={(e) =>
                    setNewEntry({ ...newEntry, name: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[var(--ds-gray-200-value)] rounded-lg bg-[rgba(var(--color-background))] focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

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
                />
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

        {/* Guestbook Entries */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-8 flex items-center justify-center gap-3">
            <FaComments className="text-green-500" />
            Recent Messages
          </h2>

          <div className="max-w-4xl mx-auto space-y-6">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[rgba(var(--color-background))] border border-[var(--ds-gray-200-value)] rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <FaUser className="text-white text-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{entry.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-[var(--ds-gray-900)]">
                        <FaCalendar className="text-xs" />
                        {formatDate(entry.date)}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleLike(entry.id)}
                    className="flex items-center gap-2 text-sm text-[var(--ds-gray-900)] hover:text-red-500 transition-colors"
                  >
                    <FaHeart
                      className={entry.likes > 0 ? "text-red-500" : ""}
                    />
                    {entry.likes}
                  </button>
                </div>

                <p className="text-[rgb(var(--color-foreground))] leading-relaxed">
                  {entry.message}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">Connect With Me</h2>
            <p className="mb-6">
              Loved the guestbook? Let's continue the conversation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:forsonphilemon1@gmail.com"
                className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Send Email
              </a>
              <a
                href="/about"
                className="inline-block border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Guestbook;


