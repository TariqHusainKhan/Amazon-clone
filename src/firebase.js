import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAskUl9UPvVtNr47-sGVopqfuiBjz-CS1g",
    authDomain: "clone-444b6.firebaseapp.com",
    projectId: "clone-444b6",
    storageBucket: "clone-444b6.appspot.com",
    messagingSenderId: "973754259674",
    appId: "1:973754259674:web:5b1a7b6f2eb5b3d3ea6de3",
    measurementId: "G-D9ZP5V8E7G"
  };
  
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { db, auth };