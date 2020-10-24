import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaHandles from './componets/SocialMediaHandles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>GameOfSource</h1>
      </header>
      <SocialMediaHandles />
    </div>
  );
}

export default App;
