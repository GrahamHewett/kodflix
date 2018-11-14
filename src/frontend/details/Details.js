import React, { Component } from 'react';
//import movieData from '../movie-data'
import { Link, Redirect } from "react-router-dom";
import './details.css'
import noImage from '../no-image.svg'

export default class StatefulDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      title: '',
      synopsis: 'Default Synopsis',
      image: 'Default Image',
      data: [{title: 'new movie'}]
    }
  }
  //Method to alter the state
  componentDidMount() {
    fetch("/rest/shows")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          data: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    )
    .then( () => {
    let found = this.state.data.find((movie) => movie.id === this.props.match.params.id)
    let name = found ? found.title : <Redirect to='/not-found' />
    let description = found ? found.synopsis : "No Synopsis Given"
    let picture = found.title ? 
    <img src = {require(`../${found.id}.jpg`)} alt={`${found.title} Cover`}></img> : 
    <img src = {noImage} alt="Movie Cover"></img>
    
    this.setState({ 
       title: name,
       synopsis: description,
       image: picture,
      });
    })
  };

  render() {
    const { error, isLoaded, title, synopsis, image } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
    return (
      <div id="container">
        <div className="title"><h1 key={title}>{title}</h1></div>
        <div className="synopsis"><p>{synopsis}</p></div>
        <div className="details-image">{image}</div>
        <div className="return-link" ><Link exact to="/">Home</Link></div> 
      </div>
    );
    }
  }
};