// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrx8WFpwA0_fNPRGcxONv7bHNrf843IPs",
  authDomain: "qrcode-me-b97d6.firebaseapp.com",
  databaseURL: "https://qrcode-me-b97d6-default-rtdb.firebaseio.com",
  projectId: "qrcode-me-b97d6",
  storageBucket: "qrcode-me-b97d6.appspot.com",
  messagingSenderId: "848422536360",
  appId: "1:848422536360:web:e7b94085eb099a66feee9d",
  measurementId: "G-JG5102NKJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getDatabase(app);
