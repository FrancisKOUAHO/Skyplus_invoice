import firebase from "firebase/app";
import "firebase/firestore";

let firebaseConfig = {
  apiKey: "AIzaSyCWIpL1YQP6nPo-pR3PEfrOYAaaT_zSLaE",
  authDomain: "skyplusinvoice.firebaseapp.com",
  projectId: "skyplusinvoice",
  storageBucket: "skyplusinvoice.appspot.com",
  messagingSenderId: "18984490494",
  appId: "1:18984490494:web:e9aa1b3a4da6733fbd1caf"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
