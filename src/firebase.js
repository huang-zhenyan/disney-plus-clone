import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDduB47aqtTghK4VQLD6U5L6LgkAc8la5M",
  authDomain: "disney-plus-clone-fa148.firebaseapp.com",
  projectId: "disney-plus-clone-fa148",
  storageBucket: "disney-plus-clone-fa148.appspot.com",
  messagingSenderId: "906628366365",
  appId: "1:906628366365:web:d2969c22725cb71d3346f4"
};



const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;