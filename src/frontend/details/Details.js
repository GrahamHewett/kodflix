import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import './details.css'
import Loader from '../../common/loader/Loader'

export default class StatefulDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      show: [],
    }
  }
  componentDidMount() {
    fetch("/rest/shows")
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          show: result.find((movie) => movie.id === this.props.match.params.id)
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error: error
        });
      }
    )
  };

  render() {
    const { error, isLoaded, show } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div id="container">
          <Loader />
        </div>
    } else if (show === undefined) {
        return <Redirect to="/not-found" />
    } else {
      return (
      <div id="container">
        <div className="title"><h1 key={show.title}>{show.title}</h1></div>
        <div className="synopsis"><p>{show.synopsis}</p></div>
        <div className="details-img"><p>{show.id}</p></div>
        <div className="details-image">
        <img src = {require(`../../common/images/${show.id}.jpg`)} alt={`${show.title} Cover`}></img>
        </div>
        <div className="return-link" ><Link exact to="/">Home</Link></div> 
      </div>
    );
    }
  }
};