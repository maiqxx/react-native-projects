import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDFDdqzNr8rAUBVUI2qrPHpz5Kz1q698Iw",
    authDomain: "test-projects-73e32.firebaseapp.com",
    databaseURL: "https://test-projects-73e32-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-projects-73e32",
    storageBucket: "test-projects-73e32.appspot.com",
    messagingSenderId: "563511997947",
    appId: "1:563511997947:web:0a7aff9aa6e51b113b475e"
}

if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db };

