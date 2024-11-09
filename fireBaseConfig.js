// Import necessary Firebase SDK functions
import { initializeApp, getApps, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";
// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjNM9MRjHmaFj3sGnJjRyXaScM7SJKF2M",
  authDomain: "chat-app-983b7.firebaseapp.com",
  projectId: "chat-app-983b7",
  storageBucket: "chat-app-983b7.appspot.com",
  messagingSenderId: "599987207092",
  appId: "1:599987207092:web:1202855d70877251ee10e1"
};

// Initialize Firebase App only if there are no other initialized apps
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Auth only if it hasn't been initialized already
export const auth = getAuth(app) || initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// Initialize Firestore
export const db = getFirestore(app);

// Export Firestore collections
export const usersRef = collection(db, "users");
export const roomsRef = collection(db, "rooms");
