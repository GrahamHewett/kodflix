import React, { Component } from 'react';
import Routes from './routesComponent';

import './css/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
          </div>
        </header>
        <Routes />
      </div>
    );
  }
}

export default App;