import React, { Component } from 'react';
import movieData from '../movie-data'
import { Link, Redirect } from "react-router-dom";
import './details.css'

export default class StatefulDetails extends Component {
  constructor(props) {
    super(props);
    //Must initialise state first
    this.state = {
      title: '',
      synopsis: 'Default Synopsis',
      image: 'Default Image',
    }
  }
  //Method to alter the state
  componentDidMount() {
    let found = movieData.find((movie) => movie.id === this.props.match.params.id)
    let name = found ? found.title : <Redirect to='/not-found' />
    let description = found ? found.synopsis : "No Synopsis Given"
    let picture = found ? <img src = {found.imgSrc} alt="Movie Cover"></img> : "No Image Available"

      this.setState({ 
        title: name,
        synopsis: description,
        image: picture 
      });

  };

  render() {
    return (
      <div id="container">
        <div className="title"><h1>{this.state.title}</h1></div>
        <div className="synopsis"><p>{this.state.synopsis}</p></div>
        <div className="details-image">{this.state.image}</div>
        <div className="return-link" ><Link exact to="/">Home</Link></div> 
      </div>
    );
  }
};