import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  limit,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  userId: string;
  userEmail: string;
  userPhotoURL?: string;
  likes: number;
  createdAt: any;
  updatedAt: any;
}

export const guestbookService = {
  // Add a new message
  async addMessage(
    message: Omit<GuestbookEntry, "id" | "createdAt" | "updatedAt">
  ): Promise<string> {
    try {
      console.log("Attempting to add message:", message);

      const docRef = await addDoc(collection(db, "guestbook"), {
        ...message,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      console.log("Message added successfully with ID:", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding message:", error);
      console.error("Error details:", {
        code: (error as any)?.code,
        message: (error as any)?.message,
        stack: (error as any)?.stack,
      });
      throw error;
    }
  },

  // Get all messages
  async getMessages(limitCount: number = 50): Promise<GuestbookEntry[]> {
    try {
      console.log("Attempting to get messages...");

      // Try a simpler query first without ordering
      const q = query(collection(db, "guestbook"));
      const querySnapshot = await getDocs(q);

      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GuestbookEntry[];

      // Sort messages by createdAt timestamp if available
      const sortedMessages = messages.sort((a, b) => {
        const aTime =
          a.createdAt?.toDate?.() || new Date(a.createdAt) || new Date(0);
        const bTime =
          b.createdAt?.toDate?.() || new Date(b.createdAt) || new Date(0);
        return bTime.getTime() - aTime.getTime();
      });

      console.log(
        "Messages retrieved successfully:",
        sortedMessages.length,
        "messages"
      );
      return sortedMessages.slice(0, limitCount);
    } catch (error) {
      console.error("Error getting messages:", error);
      console.error("Error details:", {
        code: (error as any)?.code,
        message: (error as any)?.message,
        stack: (error as any)?.stack,
      });
      throw error;
    }
  },

  // Delete a message
  async deleteMessage(messageId: string): Promise<void> {
    try {
      console.log("Attempting to delete message:", messageId);
      await deleteDoc(doc(db, "guestbook", messageId));
      console.log("Message deleted successfully");
    } catch (error) {
      console.error("Error deleting message:", error);
      console.error("Error details:", {
        code: (error as any)?.code,
        message: (error as any)?.message,
        stack: (error as any)?.stack,
      });
      throw error;
    }
  },

  // Update a message
  async updateMessage(
    messageId: string,
    updates: Partial<GuestbookEntry>
  ): Promise<void> {
    try {
      console.log("Attempting to update message:", messageId, updates);
      await updateDoc(doc(db, "guestbook", messageId), {
        ...updates,
        updatedAt: serverTimestamp(),
      });
      console.log("Message updated successfully");
    } catch (error) {
      console.error("Error updating message:", error);
      console.error("Error details:", {
        code: (error as any)?.code,
        message: (error as any)?.message,
        stack: (error as any)?.stack,
      });
      throw error;
    }
  },
};
