// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZpoTupRKzbdYJAzwMVS3VV1n5O0wXHOg",
  authDomain: "pets-care-a2477.firebaseapp.com",
  projectId: "pets-care-a2477",
  storageBucket: "pets-care-a2477.firebasestorage.app",
  messagingSenderId: "381125887521",
  appId: "1:381125887521:web:9877bc34c01470d2120560"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);