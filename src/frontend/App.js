import React, { Component } from 'react';
import Routes from './navigation/Routes';
import './App.css';
const Fetched = require('../backend/FetchShows.js')

class App extends Component {

  render() {
    return (
      <div className="App">
        <Routes />
        <Fetched />
      </div>
    );
  }
}

export default App;