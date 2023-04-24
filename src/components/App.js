import React from 'react'
import logo from './../logo.svg';
import './../styles/App.css';
import CreateLink from './CreateLink';
import Header from  './Header'
import LinkList from './LinkList';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='w85'>
          <Header />
        </div>
        <div className='ph3 pv1 white-gray'>
          <Routes>
            <Route
              path='/'
              element={<LinkList/>}
            />
            <Route
              path='/create'
              element={<CreateLink/>}
            />
          </Routes>
        </div>
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
