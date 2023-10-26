
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// import { initializeApp } from "firebase/app";


import firebase from "firebase/compat/app"; // Use compat to maintain backward compatibility
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyA_cE_pbs0cjK6OeSAmjm-q48BDP5LrOqY",
  authDomain: "swiftcard-24c10.firebaseapp.com",
  projectId: "swiftcard-24c10",
  storageBucket: "swiftcard-24c10.appspot.com",
  messagingSenderId: "547973003658",
  appId: "1:547973003658:web:88e657c6af03f574e53073",
  measurementId: "G-11FMSTZYST"
};


// const app = initializeApp(firebaseConfig);
    
// const auth = getAuth(app);
 //const fs = getFirestore(app);
// const storage = getStorage(app);
//    export{auth,fs,storage}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Get Firestore instance
export const db = firebaseApp.firestore();
export const auth = firebaseApp.auth();
export const storage=firebaseApp.storage();

export default firebaseApp;
