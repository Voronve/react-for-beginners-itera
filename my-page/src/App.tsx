import React from 'react';
import data from './bio.json';
import Bio from './Bio/Bio';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import './App.css';

const App = () => (
    <div className='general'>
      <Header name={ data.name }/>
      <Bio bio={ data.bio }/>
      <Footer contacts={ data.contacts } />
    </div>
);
export default App;
