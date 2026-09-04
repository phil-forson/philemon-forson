import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  updateDoc,
  doc,
  query,
  serverTimestamp,
  Timestamp,
  type FieldValue,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

export const GUESTBOOK_MESSAGE_MAX_LENGTH = 500;
export const GUESTBOOK_NAME_MAX_LENGTH = 80;
const GUESTBOOK_PHOTO_MAX_LENGTH = 2048;

export interface GuestbookEntry {
  id: string;
  name: string;
  message: string;
  userId: string;
  userPhotoURL?: string;
  likes: number;
  createdAt: Timestamp | null;
  updatedAt: Timestamp | null;
}

function requireSignedInUser() {
  const user = auth.currentUser;
  if (!user) {
    throw new Error("You must be signed in to do that.");
  }
  return user;
}

function normalizeMessage(message: string): string {
  const trimmed = message.trim();
  if (trimmed.length < 1 || trimmed.length > GUESTBOOK_MESSAGE_MAX_LENGTH) {
    throw new Error(
      `Message must be between 1 and ${GUESTBOOK_MESSAGE_MAX_LENGTH} characters.`
    );
  }
  return trimmed;
}

function toTimestamp(value: unknown): Timestamp | null {
  return value instanceof Timestamp ? value : null;
}

function timestampMillis(value: Timestamp | null): number {
  return value ? value.toMillis() : 0;
}

function mapEntry(snapshot: QueryDocumentSnapshot): GuestbookEntry {
  const data = snapshot.data();
  return {
    id: snapshot.id,
    name: typeof data.name === "string" ? data.name : "Anonymous",
    message: typeof data.message === "string" ? data.message : "",
    userId: typeof data.userId === "string" ? data.userId : "",
    userPhotoURL:
      typeof data.userPhotoURL === "string" ? data.userPhotoURL : undefined,
    likes: typeof data.likes === "number" ? data.likes : 0,
    createdAt: toTimestamp(data.createdAt),
    updatedAt: toTimestamp(data.updatedAt),
  };
}

export const guestbookService = {
  async addMessage(message: string): Promise<string> {
    const user = requireSignedInUser();
    const normalizedMessage = normalizeMessage(message);
    const name = (user.displayName || "Anonymous").slice(
      0,
      GUESTBOOK_NAME_MAX_LENGTH
    );

    if (name.length < 1) {
      throw new Error("A display name is required to post a message.");
    }

    const payload: {
      name: string;
      message: string;
      userId: string;
      userPhotoURL?: string;
      likes: number;
      createdAt: FieldValue;
      updatedAt: FieldValue;
    } = {
      name,
      message: normalizedMessage,
      userId: user.uid,
      likes: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    if (
      user.photoURL &&
      user.photoURL.length > 0 &&
      user.photoURL.length <= GUESTBOOK_PHOTO_MAX_LENGTH
    ) {
      payload.userPhotoURL = user.photoURL;
    }

    const docRef = await addDoc(collection(db, "guestbook"), payload);
    return docRef.id;
  },

  async getMessages(limitCount: number = 50): Promise<GuestbookEntry[]> {
    const querySnapshot = await getDocs(query(collection(db, "guestbook")));
    const messages = querySnapshot.docs.map(mapEntry);

    return messages
      .sort((a, b) => timestampMillis(b.createdAt) - timestampMillis(a.createdAt))
      .slice(0, limitCount);
  },

  async isCurrentUserAdmin(): Promise<boolean> {
    const user = auth.currentUser;
    if (!user) {
      return false;
    }

    try {
      const snapshot = await getDoc(doc(db, "siteConfig", "admins"));
      if (!snapshot.exists()) {
        return false;
      }

      const uids = snapshot.data().uids;
      return Array.isArray(uids) && uids.includes(user.uid);
    } catch {
      return false;
    }
  },

  async deleteMessage(messageId: string): Promise<void> {
    requireSignedInUser();
    await deleteDoc(doc(db, "guestbook", messageId));
  },

  async updateMessage(messageId: string, message: string): Promise<void> {
    requireSignedInUser();
    const normalizedMessage = normalizeMessage(message);
    await updateDoc(doc(db, "guestbook", messageId), {
      message: normalizedMessage,
      updatedAt: serverTimestamp(),
    });
  },
};
