import React from 'react';
import './App.css';
import FetchImage from './components/fetchImage';
import Header from './components/header';

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Header />
      <FetchImage />
    </div>
  );
}

export default App;
