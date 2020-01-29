import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Clique no link para ir ao meu Perfil Profissional:
        </p>
        <a
          className="App-link"
          href="https://linkedin.com/in/ciceroroniel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
