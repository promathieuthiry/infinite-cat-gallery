import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"

import './App.css';
import FetchImage from './components/fetchImage';
import Favourite from './components/favourite';

require('dotenv').config()

function App() {
  return (
    <div className="App">
      <Router>
      <Route exact path='/' component={FetchImage} />
      <Route exact path='/favourite' component={Favourite} />
  </Router>
    </div>
  );
}

export default App;
