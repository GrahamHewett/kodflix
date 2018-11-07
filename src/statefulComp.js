import React from 'react';

export default class StateComponent extends React.Component {
    constructor (props){
        super (props);
    this.state = {
        message: "Change this message into coming soon"
    }
    this.changeMessageMethod = this.changeMessageMethod.bind(this);
}

changeMessageMethod() {
   return setTimeout(() => this.setState({message: "Coming Soon!"}), 3000)
}    
render() {
    return (
        //Any Valid JSX code E.g.
      <div>
        <button onClick={this.changeMessageMethod}>Click Me</button>
        <div onLoad={this.changeMessageMethod}> </div>
        <h1>{this.state.message}</h1>
      </div>
    );
}
};

/*this.setState ({

}) */

//this.methodName = this.methodName.bind(this);