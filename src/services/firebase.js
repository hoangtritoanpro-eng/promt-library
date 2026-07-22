import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAKDbepwCp5UDb2ProNQBhx_baF8zQnQ_Y",
  authDomain: "kholenhai.firebaseapp.com",
  projectId: "kholenhai",
  storageBucket: "kholenhai.firebasestorage.app",
  messagingSenderId: "73195777408",
  appId: "1:73195777408:web:810b302892505337e4e565"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// Authentication Helpers
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    if (error.code === 'auth/unauthorized-domain') {
      alert("Lỗi đăng nhập: Tên miền của web (" + window.location.hostname + ") chưa được thêm vào Authorized Domains trên Firebase Console.");
    } else if (error.code !== 'auth/popup-closed-by-user') {
      alert("Lỗi đăng nhập Google: " + (error.message || error.code));
    }
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
    throw error;
  }
};
