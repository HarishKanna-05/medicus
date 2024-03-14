import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDvzsLao0YfT8qcNIYgmJGTwdS7iXRBoVs",
  authDomain: "login-hp-6fd5f.firebaseapp.com",
  projectId: "login-hp-6fd5f",
  storageBucket: "login-hp-6fd5f.appspot.com",
  messagingSenderId: "1061848023442",
  appId: "1:1061848023442:web:f32aa4d7795ec81222c14b",
  measurementId: "G-ED71D00NTC"
};


const app = initializeApp(firebaseConfig);

export const auth =getAuth(app)