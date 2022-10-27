// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCh6gM0kDd35K-P8GWiG7iG_u_vF7ClsPU",
  authDomain: "educationalzone-7a33d.firebaseapp.com",
  projectId: "educationalzone-7a33d",
  storageBucket: "educationalzone-7a33d.appspot.com",
  messagingSenderId: "433795877612",
  appId: "1:433795877612:web:0f199ae5f3ea57678db3c9",
  measurementId: "G-EHJ29D2ML6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);