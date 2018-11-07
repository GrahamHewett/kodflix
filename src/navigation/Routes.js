import React from 'react';
import { Route, Link } from "react-router-dom";
import Gallery from '../gallery/Gallery';
import StatefulDetails from '../Details';

function Id({ match }) {
    return (
      <div>
        <h2>Id: {match.params.id}</h2>
        <StatefulDetails />
        <Link to = "/" exact>Back to List of Movies</Link> 
      </div>
    );
}

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path ="/" component={Gallery} exact />
        <Route path ="/details" component={StatefulDetails} exact />
        <Route path="/:id" component={Id} exact/>
      </div>
    )}
  };