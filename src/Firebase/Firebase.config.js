import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.DB_APIKEY,
  authDomain: import.meta.env.DB_AUTHDOMAIN,
  projectId: import.meta.env.DB_PROJECTID,
  storageBucket: import.meta.env.DB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.DB_MESSAGINGSENDERID,
  appId: import.meta.env.DB_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
