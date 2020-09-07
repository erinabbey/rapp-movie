
import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCrJAqVPylbyFUlYKiIyG1YGJ1fZViV3Tg",
  authDomain: "photo-g-e4c3f.firebaseapp.com",
  databaseURL: "https://photo-g-e4c3f.firebaseio.com",
  projectId: "photo-g-e4c3f",
  storageBucket: "photo-g-e4c3f.appspot.com",
  messagingSenderId: "951036543756",
  appId: "1:951036543756:web:781867c91795cd15367f29",
  measurementId: "G-3Z71YEY69D"
};
  
  firebase.initializeApp(firebaseConfig);
  const photoStorage = firebase.storage();
  const fireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;// special type of data a timestamp data , firebase uses in its firestore

  export {photoStorage, fireStore, timestamp}
  