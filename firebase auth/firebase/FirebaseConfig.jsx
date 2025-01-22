// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8K3igmzsJ-U_szsZjab9IW3JsgU-kc40",
  authDomain: "auth-8d0ac.firebaseapp.com",
  projectId: "auth-8d0ac",
  storageBucket: "auth-8d0ac.firebasestorage.app",
  messagingSenderId: "1024395925197",
  appId: "1:1024395925197:web:5a2957fe39cefcd7d33b84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);