// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKLAT4d3xh3KAN90_ia2ITzmfVEFyGO8o",
  authDomain: "loanassisment.firebaseapp.com",
  projectId: "loanassisment",
  storageBucket: "loanassisment.appspot.com",
  messagingSenderId: "693956335453",
  appId: "1:693956335453:web:1e9ec9c94d6c55d39d3ab4",
  measurementId: "G-XM4Q9HVV71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)