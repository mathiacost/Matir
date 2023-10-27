// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTFmIwYVHXUzE_zC8lodZPjqTMQMtXdEo",
  authDomain: "e-comerce-matir.firebaseapp.com",
  projectId: "e-comerce-matir",
  storageBucket: "e-comerce-matir.appspot.com",
  messagingSenderId: "363373898423",
  appId: "1:363373898423:web:518bb48d046689801dbb32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)