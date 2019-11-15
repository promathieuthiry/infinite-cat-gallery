import React from 'react';
import { HashRouter, Route } from "react-router-dom"

import './App.css';
import FetchImage from './components/fetchImage';
import Favourite from './components/favourite';

require('dotenv').config()

function App() {
  return (
    <div className="App">
    <HashRouter basename="/">
    <Route exact path='/' component={FetchImage} />
    <Route exact path='/favourite' component={Favourite} /> 
   </HashRouter> 
  {/*<Favourite />
  // <FetchImage /> */}
    </div>
  );
}

export default App;
