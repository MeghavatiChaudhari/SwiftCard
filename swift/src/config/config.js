
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA_cE_pbs0cjK6OeSAmjm-q48BDP5LrOqY",
  authDomain: "swiftcard-24c10.firebaseapp.com",
  projectId: "swiftcard-24c10",
  storageBucket: "swiftcard-24c10.appspot.com",
  messagingSenderId: "547973003658",
  appId: "1:547973003658:web:88e657c6af03f574e53073",
  measurementId: "G-11FMSTZYST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
    
const auth = getAuth(app);
const fs = getFirestore(app);
const storage = getStorage(app);
   export{auth,fs,storage}
