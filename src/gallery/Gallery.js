import React from 'react';
import { NavLink } from 'react-router-dom'
import movieData from './gallery-get';

class Gallery extends React.Component {
  render() {
      let iterateMovies = movieData.map((movie) =>
          <div className="cover">
              <h2>{movie.title}</h2>
              <NavLink to={movie.id} exact >
                  <img src={movie.imgSrc} alt={`${movie.title} Cover`}></img>
              </NavLink>
          </div>)

      return (<div className = 'gallery'>{iterateMovies}</div>)
  }
};

export default Gallery;