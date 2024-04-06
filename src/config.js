// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore, doc, onSnapshot } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHBrHwWNkGkWVG5Rl_ZT3OTu6ZwLgmbUA",
  authDomain: "sage-tinder-clone.firebaseapp.com",
  projectId: "sage-tinder-clone",
  storageBucket: "sage-tinder-clone.appspot.com",
  messagingSenderId: "802949845194",
  appId: "1:802949845194:web:08da21f89f93324e05a433",
  measurementId: "G-PNY0WK24SS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
