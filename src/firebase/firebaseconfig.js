// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Kd4zp_GTarDvLcwgXVyGkVL2iF041xk",
  authDomain: "ianmwenda.firebaseapp.com",
  databaseURL: "https://ianmwenda-default-rtdb.firebaseio.com",
  projectId: "ianmwenda",
  storageBucket: "ianmwenda.appspot.com",
  messagingSenderId: "803259312617",
  appId: "1:803259312617:web:c5aee7717a39fded958378"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)