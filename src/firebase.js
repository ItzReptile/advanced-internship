// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0stUb5nRPTKc1EizbEhpIQZ12MYBj9I",
  authDomain: "fir-libary.firebaseapp.com",
  projectId: "fir-libary",
  storageBucket: "fir-libary.appspot.com",
  messagingSenderId: "677369063681",
  appId: "1:677369063681:web:82f975e71c0b4b9a7dd300",
};


const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Successfully signed up
      const user = userCredential.user;
      console.log("User ID:", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error creating user:", errorMessage);
    });
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const annom = () => {
  signInAnonymously(auth)
    .then((userCredential) => {
      // Successfully signed in anonymously
      const user = userCredential.user;
      console.log("Anonymous user ID:", user.uid);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Error signing in anonymously:", errorMessage);
    });
};
export { auth, provider, annom, createUser };
