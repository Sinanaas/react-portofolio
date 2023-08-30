import { initializeApp } from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBF-NkdbFg7txALWzOPH7_Yulrb_kOh0QI",
  authDomain: "react-portfolio-6dcc0.firebaseapp.com",
  projectId: "react-portfolio-6dcc0",
  storageBucket: "react-portfolio-6dcc0.appspot.com",
  messagingSenderId: "229734310264",
  appId: "1:229734310264:web:aee8fdcebfb4ae449be88d"
};

const app = initializeApp(firebaseConfig);

const projectStorage = app.storage();
const projectFirestore = app.firestore();

export { projectStorage, projectFirestore };
