import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBCSXHqT2QuabSJipxsbIbYEMDkizza4Wc",
    authDomain: "twitter-clone-28b1f.firebaseapp.com",
    databaseURL: "https://twitter-clone-28b1f.firebaseio.com",
    projectId: "twitter-clone-28b1f",
    storageBucket: "twitter-clone-28b1f.appspot.com",
    messagingSenderId: "262441748213",
    appId: "1:262441748213:web:01d91862d95e024ca5a7bc",
    measurementId: "G-HCJ7EMD5Y5"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  export default db;