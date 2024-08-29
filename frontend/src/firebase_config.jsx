// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA301Ha1a-MjThA_y51T6etvBN5SGCB1b0",
    authDomain: "awesome-project-beaad.firebaseapp.com",
    projectId: "awesome-project-beaad",
    storageBucket: "awesome-project-beaad.appspot.com",
    messagingSenderId: "633766699186",
    appId: "1:633766699186:web:7b2e52a06f4b4c3989a9ab"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
