import firebase from 'firebase'

// get Configaraion from firebase.console
var config={
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
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
