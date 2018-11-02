import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";

import './App.css';
import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg';
import deathNoteImg from './deathNote.jpg'
import gameOfThronesImg from './gameOfThrones.jpg';
import theWireImg from './theWire.jpg';
import TvShow from './tvShowComponent';
import theWalkingDeadImg from './theWalkingDead.jpg';

const Details = () => (
  <div>
    Hello, this will be the details page for each Movie & TV show :)
    </div>
);
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
              <li> <Link to="/about">About</Link> </li>
              <li> <Link to="/details">Details</Link> </li>
              <li><a href="/messages">Messages (with a regular a tag)</a> 
  </li>
            </ul>
          </div>
          <Route path="/about" component={About}/>
          <Route path="/details" component={Details}/>
        </div>
        </header>
        <main>
          <div className="row">
            <TvShow name = "Black Mirror" img = {blackMirrorImg} />
            <TvShow name = "Breaking Bad" img = {breakingBadImg} />
            <TvShow name = "Death Note" img= {deathNoteImg} />
          </div>
          <div className = "row">
            <TvShow name = "Game of Thrones" img= {gameOfThronesImg} />
            <TvShow name = "The Wire" img = {theWireImg}  />
            <TvShow name= "The Walking Dead" img= {theWalkingDeadImg} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;