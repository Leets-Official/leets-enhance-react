import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDcRsTX8r0-IcxFusfZO-c7kcx8GTBud-Y",
  authDomain: "enhance-b57c3.firebaseapp.com",
  projectId: "enhance-b57c3",
  storageBucket: "enhance-b57c3.appspot.com",
  messagingSenderId: "422044579928",
  appId: "1:422044579928:web:34164991c6aa477595b22d"
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp)

export { firebaseAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail }