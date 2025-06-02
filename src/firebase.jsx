// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX0kT83VIbwxZ7k5uOl7Txq72MQ67pr5U",
  authDomain: "proyecto1-48965.firebaseapp.com",
  projectId: "proyecto1-48965",
  storageBucket: "proyecto1-48965.firebasestorage.app",
  messagingSenderId: "846389452552",
  appId: "1:846389452552:web:59095c573937b3f94ed6bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };