import React from 'react';
import {NavLink} from 'react-router-dom'

export default class TvShow extends React.Component {
    render() {
        return (
    <div className="column">
      <h2>{this.props.name}</h2>
      <NavLink to="/details" exact activeStyle= { {color: 'orange' } } >
      <img src = {this.props.img} alt ={this.props.name + ' Cover'}></img>
      </NavLink>
    </div>
    )}
  };

//import TvShow from './tvShowComponent'; at top
// don't forget an export default statement
// <TvShow /> in App return statement
