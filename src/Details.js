import React, {Component}from 'react';

export default class StatefulDetails extends Component {
    constructor (props){
      super (props);
      //Must initialise state first
      this.state = {
        message: "Change this message into coming soon"
      }
    }
//Method to alter the state

  componentDidMount() {
    setTimeout( () => {
      this.setState({message: "Coming soon! :)"});
    }, 3000);
  }

  render(match) {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};