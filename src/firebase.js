// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
// import 'firebase/compat/firestore';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJ0gyw-55nRBvZ95ULvo4tBrYCkaN7TnM",
  authDomain: "react-myportal.firebaseapp.com",
  projectId: "react-myportal",
  storageBucket: "react-myportal.appspot.com",
  messagingSenderId: "421867917612",
  appId: "1:421867917612:web:5f4596c5430a8ecde95c89",
  measurementId: "G-VGHT9F12GT"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore()