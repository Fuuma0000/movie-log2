import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBMY3Bi5x_1gNi4NX3yqQLSzqrU128rp1M",
  authDomain: "movielog-aa117.firebaseapp.com",
  projectId: "movielog-aa117",
  storageBucket: "movielog-aa117.appspot.com",
  messagingSenderId: "19675231232",
  appId: "1:19675231232:web:0048589cd9ad9f28e8d4e5",
  measurementId: "G-SL6YPV0HQ7",
});

// Initialize Firebase
const analytics = getAnalytics(firebaseApp);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
