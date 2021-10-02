import  firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyAv04D4igCahFhhp6qFKN_yR2lxZfxn7aY",
  authDomain: "wily-app-dba12.firebaseapp.com",
  projectId: "wily-app-dba12",
  storageBucket: "wily-app-dba12.appspot.com",
  messagingSenderId: "782470721927",
  appId: "1:782470721927:web:1d8faab7d8e90ec87a2322"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();