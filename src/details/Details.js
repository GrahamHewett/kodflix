import React, { Component } from 'react';
import movieData from '../movie-data'

export default class StatefulDetails extends Component {
  constructor(props) {
    super(props);
    //Must initialise state first
    this.state = {
      title: ''
    }
  }
  //Method to alter the state

  componentDidMount() {
      let found = movieData.find((movie) => movie.id === this.props.match.params.id)
      let name = found ? found.title : "That movie doesn't exist"
      this.setState({ title: name });
    };

render() {
  return (
    <div>
      <h1>{this.state.title}</h1>
    </div>
  );
}
};