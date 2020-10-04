import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDGsJaTOTEhKiBte8zYZJsvnq7bkjgOOQQ",
    authDomain: "collegesearch-2a79c.firebaseapp.com",
    databaseURL: "https://collegesearch-2a79c.firebaseio.com",
    projectId: "collegesearch-2a79c",
    storageBucket: "collegesearch-2a79c.appspot.com",
    messagingSenderId: "48251785411",
    appId: "1:48251785411:web:b0c1a5a0baa77e1cb99276"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();