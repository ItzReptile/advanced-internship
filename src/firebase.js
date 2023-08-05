// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc0stUb5nRPTKc1EizbEhpIQZ12MYBj9I",
  authDomain: "fir-libary.firebaseapp.com",
  projectId: "fir-libary",
  storageBucket: "fir-libary.appspot.com",
  messagingSenderId: "677369063681",
  appId: "1:677369063681:web:82f975e71c0b4b9a7dd300"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}