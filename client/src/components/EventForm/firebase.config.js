import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
    // Add your firebase credentials
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
})

var db = firebaseApp.firestore();

export { db }