import firebase from 'firebase';

// add SDK Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXQzBrnJ74AbRUzNa71TUtF9kkCp23xWY",
  authDomain: "project67-9093a.firebaseapp.com",
  databaseURL: "https://project67-9093a-default-rtdb.firebaseio.com",
  projectId: "project67-9093a",
  storageBucket: "project67-9093a.appspot.com",
  messagingSenderId: "51027940443",
  appId: "1:51027940443:web:3702e579b06c974b2e5b7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();