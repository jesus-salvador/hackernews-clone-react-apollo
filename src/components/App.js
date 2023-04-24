import React from 'react'
import logo from './../logo.svg';
import './../styles/App.css';
import LinkList from './LinkList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LinkList />
      </header>
      <footer>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </footer>
    </div>
  );
}

export default App;
