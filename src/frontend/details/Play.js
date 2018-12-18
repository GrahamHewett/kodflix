import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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
    fetch(`/rest/shows/${this.props.match.params.id}`)
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
        <div className='trailer'>
            <iframe width="100%" height="900px" title='Play Trailer'
                src={show.videoRef} frameBorder="0"
                allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
    }
  }
};