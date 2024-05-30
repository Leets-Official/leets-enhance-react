// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsa0ijjGrCaoNHqNSejaX9lwU_klCi7Fo",
  authDomain: "react-login3-603fe.firebaseapp.com",
  projectId: "react-login3-603fe",
  storageBucket: "react-login3-603fe.appspot.com",
  messagingSenderId: "477145007509",
  appId: "1:477145007509:web:a92a1a5535e3ed7169229c"
};


const app = initializeApp(firebaseConfig);
const authService = getAuth(app);
export {authService };