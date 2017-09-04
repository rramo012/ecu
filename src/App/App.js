import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Halo } from '../Lighting/Halo/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header black">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Vehicle Electronics Control Unit</h2>
        </div>
        <div className="container">
          <Halo />
        </div>
      </div>
    );
  }
}

export default App;
