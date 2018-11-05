import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Gallery from './gallery';
import Details from './detailsPage';

function Id({ match }) {
    return (
      <div>
        <h2>Id: {match.params.id}</h2>
      </div>
    );
}

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path ="/" component={Gallery} exact />
        <Route path="/details" component={Details} exact/>
        <Route path="/:id" component={Id} exact/>
      </div>
    )}
  };