import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import { text } from 'body-parser';
// Add here Var config from firebase console-> console.firebase.google.com
var config={
  apikey:" ",
  authDomain:" ",
  databaseURL:" ",
  storageBucket:" ",
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

  //  sign in
  auth.signInWithEmailAndPassword(email,pass);
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GameOfSource</h1>
      </header>
    </div>
  );
}

export default App;
