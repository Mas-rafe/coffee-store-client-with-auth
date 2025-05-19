// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA04UCRTjL4Jr8mfrb8xZC7yvRfELSACJ4",
  authDomain: "coffee-store-app-cbecb.firebaseapp.com",
  projectId: "coffee-store-app-cbecb",
  storageBucket: "coffee-store-app-cbecb.firebasestorage.app",
  messagingSenderId: "19555879588",
  appId: "1:19555879588:web:cc6bda5d4d743257ca7431"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);