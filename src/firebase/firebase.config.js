// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzsZY-afFxoafyscJi3hp15N_7tfXjiaQ",
  authDomain: "user-email-password-auth-ef62a.firebaseapp.com",
  projectId: "user-email-password-auth-ef62a",
  storageBucket: "user-email-password-auth-ef62a.appspot.com",
  messagingSenderId: "440059474101",
  appId: "1:440059474101:web:130ebd08ec1bd1105a0efc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;
