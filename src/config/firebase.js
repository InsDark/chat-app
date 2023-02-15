// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX7cKhaTxJd-IrpYJvbQfIqxn7BDy1kvE",
  authDomain: "react-firebase-todo-bc13c.firebaseapp.com",
  databaseURL: "https://react-firebase-todo-bc13c-default-rtdb.firebaseio.com",
  projectId: "react-firebase-todo-bc13c",
  storageBucket: "react-firebase-todo-bc13c.appspot.com",
  messagingSenderId: "254051495367",
  appId: "1:254051495367:web:d6377cc49d4c3a070afde2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
