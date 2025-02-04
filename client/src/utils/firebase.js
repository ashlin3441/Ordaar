import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google Sign-In Success:", result.user);
    return result.user;
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    throw error;
  }
};

const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    console.log("Facebook Sign-In Success:", result.user);
    return result.user;
  } catch (error) {
    console.error("Facebook Sign-In Error:", error.message);
    throw error;
  }
};

export { auth, signInWithFacebook, signInWithGoogle };
