import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // for authentication
import "firebase/compat/storage"; // for storage
import "firebase/compat/database"; // for realtime database
import "firebase/compat/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyC8j4Q55tOSliHNTwNEkGIpinDlMp2l2jQ",

  authDomain: "qommon-chat.firebaseapp.com",

  projectId: "qommon-chat",

  storageBucket: "qommon-chat.appspot.com",

  messagingSenderId: "613139812205",

  appId: "1:613139812205:web:68886cd844a938feda1464",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
