// Učitavanje potrebnih funkcija
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase konfiguracija
const firebaseConfig = {
  apiKey: "AIzaSyDhtv4NG6xpTDzMzJXYx5y5iV4yEZlpf5A",
  authDomain: "media-record-cc166.firebaseapp.com",
  projectId: "media-record-cc166",
  storageBucket: "media-record-cc166.firebasestorage.app",
  messagingSenderId: "222645376629",
  appId: "1:222645376629:web:a184addf4cbf8c29f24a3c"
};

// Firebase inicijalizacija
const app = initializeApp(firebaseConfig);

// Inicijalizacija servisa
const auth = getAuth(app); // auth instanca
const db = getFirestore(app); // database instanca

// Izvoz servisa
export { auth, db };