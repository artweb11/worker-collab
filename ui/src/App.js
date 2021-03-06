import React from 'react';
import logo from './logo.svg';
import './App.css';

import io from 'socket.io-client';
 
const socket = io('https://woker-collab-chat.herokuapp.com/');

socket.on('connect', function(){
  console.log('CLIENT CONNECTED.');
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
