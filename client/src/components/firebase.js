import firebase from 'firebase'

// get Configaraion from firebase.console
var config={
    apiKey: "AIzaSyBC2o81sB1ejUFcPIpJrYgHKBviSlFJ7Gg",
    authDomain: "social-ape-2c756.firebaseapp.com",
    databaseURL: "https://social-ape-2c756.firebaseio.com",
    projectId: "social-ape-2c756",
    storageBucket: "social-ape-2c756.appspot.com",
    messagingSenderId: "558627228305",
    appId: "1:558627228305:web:f279bac809e20b63220d30",
    measurementId: "G-TYX4KYTHSS"
  };
  
  //Initialize App Config
 
  firebase.initializeApp(config);

  //get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
 
  // Add login event
  btnLogin.addEventListener('click', e=>{
    // get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
  
    //  Log in
    auth.signInWithEmailAndPassword(email,pass);
  })

  export default firebase;
