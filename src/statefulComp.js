import React, { Component } from 'react';

export default class StateComponent extends React.Component {
    constructor (props){
        super (props);
    this.state = {
        message: "Change this message into coming soon", key2: 'value2',
    }
    this.changeMessageMethod = this.changeMessageMethod.bind(this);
}

changeMessageMethod() {
    this.setState({message: "Coming Soon!"})
}    
render() {
    return (
        //Any Valid JSX code E.g.
      <div>
        <button onClick={this.changeMessageMethod}>Click Me</button>
        <h1>{this.state.message}</h1>
      </div>
    );
}
};

/*this.setState ({

}) */

//this.methodName = this.methodName.bind(this);