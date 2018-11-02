import React, { Component } from 'react';
import './App.css';
import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg';
import deathNoteImg from './deathNote.jpg'
import gameOfThronesImg from './gameOfThrones.jpg';
import theWireImg from './theWire.jpg';
import theWalkingDeadImg from './theWalkingDead.jpg';
import TvShow from './tvShowComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
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