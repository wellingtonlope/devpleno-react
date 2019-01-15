import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBV4tfrsQjFCZzjab96NxHprbyyoZHAO3w",
  authDomain: "course-react-b7fdb.firebaseapp.com",
  databaseURL: "https://course-react-b7fdb.firebaseio.com",
  projectId: "course-react-b7fdb",
  storageBucket: "course-react-b7fdb.appspot.com",
  messagingSenderId: "622309528112"
};
firebase.initializeApp(config);

export const database = firebase.database()
