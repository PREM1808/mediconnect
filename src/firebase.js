import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // 1. Must import this!

const firebaseConfig = {
  apiKey: "AIzaSyB0axRIF3LzGeFXA1VHq-9qtvR_MKgM0eU",
  authDomain: "mediconnect-f1d0d.firebaseapp.com",
  projectId: "mediconnect-f1d0d",
  storageBucket: "mediconnect-f1d0d.firebasestorage.app",
  messagingSenderId: "416567283745",
  appId: "1:416567283745:web:75b4e7098af41b85155360",
  measurementId: "G-Y9BKVCPXCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 2. Export both Auth and DB (Firestore)
export const auth = getAuth(app); 
export const db = getFirestore(app); // 3. This is what was missing!