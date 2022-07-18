import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>We now have Auth!</h1>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React V2
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
