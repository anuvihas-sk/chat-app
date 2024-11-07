// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getReactNativePersistence ,initializeAuth } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjNM9MRjHmaFj3sGnJjRyXaScM7SJKF2M",
  authDomain: "chat-app-983b7.firebaseapp.com",
  projectId: "chat-app-983b7",
  storageBucket: "chat-app-983b7.firebasestorage.app",
  messagingSenderId: "599987207092",
  appId: "1:599987207092:web:1202855d70877251ee10e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, 
  {
    persistence : getReactNativePersistence(AsyncStorage)
  }
)

export const db = getFirestore(app)

export const usersRef = collection(db, "users")

export const roomsRef = collection(db, "rooms")