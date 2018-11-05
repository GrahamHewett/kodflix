import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './App.css';
import Home from './home'
import Details from './detailsPage';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="menu">
          </div>
        </header>
        <div>
          <Route path ="/" component={Home} exact />
          <Route path="/details" component={Details} exact/>
        </div>
      </div>
    );
  }
}

export default App;