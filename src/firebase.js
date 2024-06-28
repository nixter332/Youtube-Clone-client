import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAV2Mn1v4pYD5wPurZ64lXpZsiRJlF6Xd8",
  authDomain: "video-d7044.firebaseapp.com",
  projectId: "video-d7044",
  storageBucket: "video-d7044.appspot.com",
  messagingSenderId: "485544405910",
  appId: "1:485544405910:web:1e9462f90c992772ed4bb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;