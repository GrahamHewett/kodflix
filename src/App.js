import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './App.css';
import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg';
import deathNoteImg from './deathNote.jpg'
import gameOfThronesImg from './gameOfThrones.jpg';
import theWireImg from './theWire.jpg';
import TvShow from './tvShowComponent';
import Details from './detailsPage';
import Home from './home'
import theWalkingDeadImg from './theWalkingDead.jpg';

const About = () => (
  <div>
    <h2>About Example</h2>
    This example shows how to use React Router!
  </div>
);

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className = "row">
          <div className="menu">
            <ul>
              <li> <Link to="/">Home</Link> </li>
              <li> <Link to="/details">Details</Link> </li>
              <li><a href="/messages">Messages (with a regular a tag)</a></li>
            </ul>
        </div>
        </div>
        </header>
        <div>
          <Route path="/details" component={Details}/>
          <Route path ="/" component={Home}/>
        </div>
      </div>
    );
  }
}

export default App;