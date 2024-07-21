// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlp50Wlm2ZWgso61D9LWSCzgZSsMstxKg",
  authDomain: "netflixgpt-d671e.firebaseapp.com",
  projectId: "netflixgpt-d671e",
  storageBucket: "netflixgpt-d671e.appspot.com",
  messagingSenderId: "397890109464",
  appId: "1:397890109464:web:f11a2c3b803c7893bcc36d",
  measurementId: "G-46PZV66Q87"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);