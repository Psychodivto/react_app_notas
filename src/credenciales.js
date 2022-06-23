// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3kuTUwh-17soBUGEDwLB0sYqzoXzks3Y",
  authDomain: "notas-2e97e.firebaseapp.com",
  projectId: "notas-2e97e",
  storageBucket: "notas-2e97e.appspot.com",
  messagingSenderId: "549181381854",
  appId: "1:549181381854:web:978adaa7cc4154788d764f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;