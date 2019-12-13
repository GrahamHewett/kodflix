import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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
    fetch(`/shows/${this.props.match.params.id}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          show: result
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

    if (!isLoaded) {
        return <div id="container">
          <Loader />
        </div>
    } else if (error || show.error === 'not found!') {
        return <Redirect to="/not-found" />
    } else {
      return (
      <div id="container" style = {{backgroundImage: `url(${require(`../../common/images/${show.id}-wallpaper.jpg`)})`
    }}>
        {/* <div className="title"><h1 key={show.title}>{show.title}</h1></div> */}
        <div className="synopsis"><p>{show.synopsis}</p></div>
        <div className="details-image">
        </div>
      </div>
    );
    }
  }
};