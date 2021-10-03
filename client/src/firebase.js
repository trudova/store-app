// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_LEifof4KtwJ-Six6OD26B5B7004cvZE",
  authDomain: "store-4bc8c.firebaseapp.com",
  projectId: "store-4bc8c",
  storageBucket: "store-4bc8c.appspot.com",
  messagingSenderId: "579778614459",
  appId: "1:579778614459:web:45b63ec1de5b5daa52059e",
  measurementId: "G-5HSVY1TXGP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;