import React from 'react';
import bio from './bio.json';
import './App.css';

function App() {
  return (
    <div className='general'>
      <header className="App-header">
        <h1>{bio.name}</h1>
      </header>
      <div className='bio'>
        <div>{bio.bio}</div>
      </div>
      <footer>
        <div className='contacts'>{bio.contacts}</div>
      </footer>      
    </div>
  );
}

export default App;
