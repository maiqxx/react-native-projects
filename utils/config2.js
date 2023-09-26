import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";

export const firebaseConfig = {
    apiKey: "AIzaSyDFDdqzNr8rAUBVUI2qrPHpz5Kz1q698Iw",
    authDomain: "test-projects-73e32.firebaseapp.com",
    databaseURL: "https://test-projects-73e32-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-projects-73e32",
    storageBucket: "test-projects-73e32.appspot.com",
    messagingSenderId: "563511997947",
    appId: "1:563511997947:web:0a7aff9aa6e51b113b475e"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);

export {app, firebase}