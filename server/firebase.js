// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJuBqsWDA9YXs96eDElTDMTgYaPvXX96k",
    authDomain: "tweetfluent.firebaseapp.com",
    projectId: "tweetfluent",
    storageBucket: "tweetfluent.appspot.com",
    messagingSenderId: "622369688367",
    appId: "1:622369688367:web:983a89a142aa803d6d6fda"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
const db = app.firestore()

export { db, auth }