import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAMv0ogMJOTSNK5JMPRMZdz0pKIyBqs8RQ",
  authDomain: "react-photo-gallery-276e3.firebaseapp.com",
  databaseURL: "https://react-photo-gallery-276e3.firebaseio.com",
  projectId: "react-photo-gallery-276e3",
  storageBucket: "react-photo-gallery-276e3.appspot.com",
  messagingSenderId: "379884730583",
  appId: "1:379884730583:web:2649a5f583aad786e1d892"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };