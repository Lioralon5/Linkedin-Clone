import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyBb5rzWosgTDeIAecLtvhAwEPFVOOkkDs8",
  authDomain: "linkedin-clone-493a5.firebaseapp.com",
  projectId: "linkedin-clone-493a5",
  storageBucket: "linkedin-clone-493a5.appspot.com",
  messagingSenderId: "69542001871",
  appId: "1:69542001871:web:230b691fc95339f8e84bba"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };