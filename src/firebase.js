import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD9EeBqWd9dNQEhvF_IYvogqiXvVkMry3A",
    authDomain: "netflix-app-a75ea.firebaseapp.com",
    projectId: "netflix-app-a75ea",
    storageBucket: "netflix-app-a75ea.appspot.com",
    messagingSenderId: "1037511267156",
    appId: "1:1037511267156:web:6906b1b4e32f4a552daec1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;