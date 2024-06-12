// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8RVfOuiGOUpYE9VNrpjPeRkNy26lECFU",
  authDomain: "budgetapp-7b495.firebaseapp.com",
  projectId: "budgetapp-7b495",
  storageBucket: "budgetapp-7b495.appspot.com",
  messagingSenderId: "331185267062",
  appId: "1:331185267062:web:61af393050d6ac86bcda57",
  measurementId: "G-GV0Y4THCLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {app, auth};