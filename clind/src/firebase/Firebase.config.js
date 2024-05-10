// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const FirebaseConfig = {
  apiKey: "AIzaSyAGiT6V4jciEt6OR53CA9lfRM1wIvSXovw",
  authDomain: "mern-bookinventory-1ee2a.firebaseapp.com",
  projectId: "mern-bookinventory-1ee2a",
  storageBucket: "mern-bookinventory-1ee2a.appspot.com",
  messagingSenderId: "174128546728",
  appId: "1:174128546728:web:47d3d652d66bf27fa4939d"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);

export default app;