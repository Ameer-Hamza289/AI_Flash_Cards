// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_SECRET,
  authDomain: "flashai-94ccb.firebaseapp.com",
  projectId: "flashai-94ccb",
  storageBucket: "flashai-94ccb.appspot.com",
  messagingSenderId: "557169228477",
  appId: "1:557169228477:web:c3d8d734980b47367955d4",
  measurementId: "G-6FRR910JHR",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
