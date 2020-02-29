import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDcy3YzQfZPD7kS-oZ0dSdbwtspk61uqU4",
    authDomain: "clothing-web-db.firebaseapp.com",
    databaseURL: "https://clothing-web-db.firebaseio.com",
    projectId: "clothing-web-db",
    storageBucket: "clothing-web-db.appspot.com",
    messagingSenderId: "489341044002",
    appId: "1:489341044002:web:f082ad3ac0094733ee517b",
    measurementId: "G-S6QQT1G7W7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
 