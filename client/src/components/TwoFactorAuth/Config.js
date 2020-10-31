import * as firebase from 'firebase';

// Replace the following details with your
const firebaseConfig = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " ",
    measurementId: " ",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire