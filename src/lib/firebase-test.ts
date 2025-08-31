import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const testFirebaseConnection = async () => {
  try {
    console.log("Testing Firebase connection...");
    console.log("Database instance:", db);

    // Test basic connection
    const testCollection = collection(db, "test");
    console.log("Test collection reference:", testCollection);

    // Try to get documents (this will fail if there's no connection)
    const snapshot = await getDocs(testCollection);
    console.log(
      "Connection successful! Found",
      snapshot.size,
      "documents in test collection"
    );

    return { success: true, message: "Firebase connection working" };
  } catch (error) {
    console.error("Firebase connection test failed:", error);
    return {
      success: false,
      error: error,
      message: `Connection failed: ${(error as Error).message}`,
    };
  }
};
