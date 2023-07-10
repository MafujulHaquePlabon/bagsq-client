// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHlImpHlgAO3-zqZAaa27tkYuWsVj-2LY",
  authDomain: "bagsqhike.firebaseapp.com",
  projectId: "bagsqhike",
  storageBucket: "bagsqhike.appspot.com",
  messagingSenderId: "751318418106",
  appId: "1:751318418106:web:fb2be9cbcc59322ad4b883"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
