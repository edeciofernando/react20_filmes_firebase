import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyABrto-xcs23mocTzY57YKiWStQVXUK6Pc",
    authDomain: "filmes-edecio-manha.firebaseapp.com",
    databaseURL: "https://filmes-edecio-manha.firebaseio.com",
    projectId: "filmes-edecio-manha",
    storageBucket: "filmes-edecio-manha.appspot.com",
    messagingSenderId: "322148049360",
    appId: "1:322148049360:web:bce141d1f21ab5b1fc99d5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();