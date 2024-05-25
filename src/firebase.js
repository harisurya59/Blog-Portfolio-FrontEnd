import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyC4ZyHFB-34ocenx_cCyPzpNJq2cLe3wV0",
  authDomain: "blog-acc5a.firebaseapp.com",
  projectId: "blog-acc5a",
  storageBucket: "blog-acc5a.appspot.com",
  messagingSenderId: "306531351652",
  appId: "1:306531351652:web:067b8341646e059429f371"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth