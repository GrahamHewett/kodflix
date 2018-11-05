import React, { Component } from 'react';
import TvShow from './TvShow';

import blackMirrorImg from './media/blackMirror.jpg';
import breakingBadImg from './media/breakingBad.jpg';
import deathNoteImg from './media/deathNote.jpg'
import gameOfThronesImg from './media/gameOfThrones.jpg';
import theWireImg from './media/theWire.jpg';
import theWalkingDeadImg from './media/theWalkingDead.jpg';

class Gallery extends Component {

  render() {
    return (
      <div className="main">
        <div className="row">
          <TvShow name = "Black Mirror" img = {blackMirrorImg} id = "black-mirror"/>
          <TvShow name = "Breaking Bad" img = {breakingBadImg} id = "breaking-bad"/>
          <TvShow name = "Death Note" img= {deathNoteImg} id = "death-note"/>
        </div>
        <div className = "row">
          <TvShow name = "Game of Thrones" img= {gameOfThronesImg} id = "game-of-thrones"/>
          <TvShow name = "The Wire" img = {theWireImg}  id = "the-wire"/>
          <TvShow name= "The Walking Dead" img= {theWalkingDeadImg} id = "the-walking-dead"/>
        </div>
      </div>
    );
  }
}

export default Gallery;