import React, { Component } from 'react';
import Routes from './navigation/Routes';
import './App.css';
import ReactGA from 'react-ga';


class App extends Component {

  constructor() {
    super();
    ReactGA.initialize('UA-129505001-1');
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;