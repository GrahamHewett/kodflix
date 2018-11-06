import React, { Component } from 'react';
import TvShow from './TvShow';

import blackMirrorImg from './blackMirror.jpg';
import breakingBadImg from './breakingBad.jpg';
import deathNoteImg from './deathNote.jpg'
import gameOfThronesImg from './gameOfThrones.jpg';
import theWireImg from './theWire.jpg';
import theWalkingDeadImg from './theWalkingDead.jpg';

class Gallery extends Component {

  render() {
    return (
      <div className="gallery">
          <TvShow name = "Black Mirror" img = {blackMirrorImg} id = "black-mirror"/>
          <TvShow name = "Breaking Bad" img = {breakingBadImg} id = "breaking-bad"/>
          <TvShow name = "Death Note" img= {deathNoteImg} id = "death-note"/>
          <TvShow name = "Game of Thrones" img= {gameOfThronesImg} id = "game-of-thrones"/>
          <TvShow name = "The Wire" img = {theWireImg}  id = "the-wire"/>
          <TvShow name= "The Walking Dead" img= {theWalkingDeadImg} id = "the-walking-dead"/>
      </div>
    );
  }
}

export default Gallery;