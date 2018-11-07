import React from 'react';
import {NavLink} from 'react-router-dom'
import film1 from './blackMirror.jpg';
import film2 from './breakingBad.jpg';
import film3 from './deathNote.jpg';
import film4 from './gameOfThrones.jpg';
import film5 from './theWire.jpg';
import film6 from './theWalkingDead.jpg';

let movieData =
[
  {title: "Black Mirror", imgSrc: './blackMirror.jpg', id: "black-mirror",},
  {title: "Breaking Bad", imgSrc: './breakingBad.jpg', id: "breaking-bad",},
  {title: "Death Note", imgSrc: './deathNote.jpg', id: "death-note",},
  {title: "Game of Thrones", imgSrc: './gameOfThrones.jpg', id: "game-of-thrones",},
  {title: "The Wire", imgSrc: './theWire.jpg',  id: "the-wire",},
  {title: "The Walking Dead", imgSrc: './theWalkingDead.jpg', id: "the-walking-dead",},
] 
let iterateMovies = movieData.map( (movie, index) => 
    <div className="cover">
    <h2>{movie.title}</h2>
    <NavLink to = {movie.id} exact >
    <img src = {`film${index}`} alt ={`${movie.title} Cover`}></img>
    </NavLink>
    </div> ) 

class movieCovers extends React.Component {
    render() {
      return (<div className="cover">{iterateMovies}</div>)
    }
};  // and check this

export default movieCovers

/* class Covers extends React.Component {
    render() {
        return (
    <div className="cover">
        {movieImages}
    </div>
    )}
  };

  let movieTitles = movieData.map( (movie) => movie.title )
  let movieIds = movieData.map( (movie) => movie.id )
  let movieImages = movieData.map( (movie, index) => `import film${index} from ${movie.imgSrc};
  ` )
  */