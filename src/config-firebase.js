import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJOVtUxwQvZUDk_fdlYO6rwq1Av_pRoQM",
    authDomain: "lionchat-2d3c7.firebaseapp.com",
    projectId: "lionchat-2d3c7",
    storageBucket: "lionchat-2d3c7.appspot.com",
    messagingSenderId: "33610759165",
    appId: "1:33610759165:web:b23b7fffcdb10039177794",
    measurementId: "G-LMDSMVSNY9"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

const db = getFirestore(app);

const user = auth.currentUser;

export { auth, provider, db, user }