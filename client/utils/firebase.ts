import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIwEP8SBL1fyN82Fm06ij-VAmTIWETSJw",
  authDomain: "chat-app-24803.firebaseapp.com",
  projectId: "chat-app-24803",
  storageBucket: "chat-app-24803.appspot.com",
  messagingSenderId: "101579257539",
  appId: "1:101579257539:web:3e65654abd2d6926c51476"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
