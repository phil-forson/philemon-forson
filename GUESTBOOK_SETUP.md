# Guestbook Authentication Setup

## Firebase Configuration

To enable Google/GitHub authentication and Firestore storage for the guestbook, you need to:

1. **Create a Firebase Project:**

   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or use an existing one

2. **Enable Authentication:**

   - In Firebase Console, go to Authentication > Sign-in method
   - Enable Google and GitHub providers
   - For GitHub, you'll need to create a GitHub OAuth app and add the client ID/secret

3. **Set up Firestore Database:**

   - Go to Firestore Database in Firebase Console
   - Create a database in test mode (for development)
   - Create a collection called `guestbook`

4. **Get Firebase Config:**

   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Add a web app if you haven't already
   - Copy the config object

5. **Create Environment Variables:**
   Create a `.env.local` file in your project root with:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   ```

## Features Added

✅ **Google Authentication** - Users can sign in with their Google account
✅ **GitHub Authentication** - Users can sign in with their GitHub account  
✅ **Firestore Storage** - Messages are stored securely in the cloud
✅ **User Profile** - Shows user's name, email, and profile picture
✅ **Message Management** - Users can edit/delete their own messages
✅ **Real-time Updates** - Messages load from the database
✅ **Security** - Only authenticated users can post messages

## How it Works

1. **Authentication Flow:**

   - Users click "Sign in with Google" or "Sign in with GitHub"
   - Firebase handles the OAuth flow
   - User is redirected back with authentication token
   - User info is displayed in the guestbook

2. **Message Storage:**

   - Messages are stored in Firestore `guestbook` collection
   - Each message includes user ID, name, email, and profile picture
   - Messages are ordered by creation date (newest first)
   - Users can only edit/delete their own messages

3. **Security:**
   - Authentication is required to post messages
   - User data is validated and sanitized
   - Messages are associated with authenticated users only
