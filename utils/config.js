// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFDdqzNr8rAUBVUI2qrPHpz5Kz1q698Iw",
  authDomain: "test-projects-73e32.firebaseapp.com",
  databaseURL: "https://test-projects-73e32-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-projects-73e32",
  storageBucket: "test-projects-73e32.appspot.com",
  messagingSenderId: "563511997947",
  appId: "1:563511997947:web:0a7aff9aa6e51b113b475e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);