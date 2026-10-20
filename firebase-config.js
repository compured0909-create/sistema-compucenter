// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBhYUtjMpqbbWUGkf_oRE-Di__tbZD-9So",
    authDomain: "plataforma-educativa-compured.firebaseapp.com",
    projectId: "plataforma-educativa-compured",
    storageBucket: "plataforma-educativa-compured.firebasestorage.app",
    messagingSenderId: "495196813256",
    appId: "1:495196813256:web:d1c74002e0ca46943732fd",
    measurementId: "G-TRZ37G6SRM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);