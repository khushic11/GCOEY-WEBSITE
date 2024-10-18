import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import 'firebase/compat/auth';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDzzr2HvPJH33QTf3py-88y3NIDlv68tqw",
  authDomain: "gcoey-admin.firebaseapp.com",
  projectId: "gcoey-admin",
  storageBucket: "gcoey-admin.appspot.com",
  messagingSenderId: "316542600568",
  appId: "1:316542600568:web:16ec507a4f0f97a7a1748d",
  measurementId: "G-GBF96DJDLF"
};

firebase.initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();



