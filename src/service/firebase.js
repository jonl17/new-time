import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { firebaseConfig } from "./config";

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { firestore, auth, googleProvider };
