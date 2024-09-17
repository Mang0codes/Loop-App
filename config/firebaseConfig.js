// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "loop-clone-3d852.firebaseapp.com",
  projectId: "loop-clone-3d852",
  storageBucket: "loop-clone-3d852.appspot.com",
  messagingSenderId: "3578806207",
  appId: "1:3578806207:web:b2d7a40a1a865ca553ab0a",
  measurementId: "G-TBMR4JZ2ED"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
