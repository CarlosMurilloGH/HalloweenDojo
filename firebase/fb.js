import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBm6GMsLeJa4wjDmWiKW8wGtieezHmkAqk",
  authDomain: "halloweenprojectglobant.firebaseapp.com",
  projectId: "halloweenprojectglobant",
  storageBucket: "halloweenprojectglobant.appspot.com",
  messagingSenderId: "789290320992",
  appId: "1:789290320992:web:73ccd7ee532ca29175ef05"
  };


const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;