import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBXwFuTiM4s73fC2zWuOhE-bo-RUyZvRMA",
  authDomain: "react-sharenergy-autenticacao.firebaseapp.com",
  projectId: "react-sharenergy-autenticacao",
  storageBucket: "react-sharenergy-autenticacao.appspot.com",
  messagingSenderId: "725977310384",
  appId: "1:725977310384:web:79ceba728da41e6a8d8775"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)