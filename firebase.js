// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU-7r9UXGXWE5KRp-fgAsPyNg3ELAAapk",
  authDomain: "inventory-tracker-d816e.firebaseapp.com",
  projectId: "inventory-tracker-d816e",
  storageBucket: "inventory-tracker-d816e.appspot.com",
  messagingSenderId: "648808798611",
  appId: "1:648808798611:web:bfd8d597e0c7fc5e227066",
  measurementId: "G-YD3FWBS6E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}
