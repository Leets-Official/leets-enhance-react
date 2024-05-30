// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfWfmKNBoMijFyBhtMR7mZphwsWL_oZyc",
  authDomain: "login-e4a31.firebaseapp.com",
  projectId: "login-e4a31",
  storageBucket: "login-e4a31.appspot.com",
  messagingSenderId: "368306137967",
  appId: "1:368306137967:web:221ae99b4566a71849d69a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
