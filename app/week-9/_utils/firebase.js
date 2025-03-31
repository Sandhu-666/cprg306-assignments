"use client";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 

const firebaseConfig = {
  apiKey: "AIzaSyCcJz4mlaIjm5CTrduaEC3x0dddAkMdG0g",
  authDomain: "cprg306-assignments-ef7fb.firebaseapp.com",
  projectId: "cprg306-assignments-ef7fb",
  storageBucket: "cprg306-assignments-ef7fb.firebasestorage.app",
  messagingSenderId: "609284014440",
  appId: "1:609284014440:web:12e712ba13d8ba10ed16dd",
};
 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);