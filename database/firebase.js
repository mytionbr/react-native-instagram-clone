import firebase from 'firebase'

const  firebaseConfig = {
    apiKey: "AIzaSyDnEAmaRjalccq5QlNCwk6XmYyc61Qxoc8",
    authDomain: "instagram-dev-tutorial.firebaseapp.com",
    projectId: "instagram-dev-tutorial",
    storageBucket: "instagram-dev-tutorial.appspot.com",
    messagingSenderId: "1008946428566",
    appId: "1:1008946428566:web:fff0570481ea1a9de2e0b7",
    measurementId: "G-3Z5L679VET"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default {firebase}