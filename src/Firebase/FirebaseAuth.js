import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBfOXm2c8hjz63FpAEUDdldiWNhGtMhvX4",
  authDomain: "dsa-817e6.firebaseapp.com",
  projectId: "dsa-817e6",
  storageBucket: "dsa-817e6.appspot.com",
  messagingSenderId: "1037168632490",
  appId: "1:1037168632490:web:11a9d3e1d232977eeda6d3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider);
};
export const signOutFromGoogle = () => {
  signOut(auth, provider);
};
