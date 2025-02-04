import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCrH4UWOybpT83CB24WrrF38ajjMT5pfp0",
    authDomain: "orddar.firebaseapp.com",
    projectId: "orddar",
    storageBucket: "orddar.firebasestorage.app",
    messagingSenderId: "740854408597",
    appId: "1:740854408597:web:743b839fd216522286829c",
    measurementId: "G-KKSBS4XQQ4"
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
