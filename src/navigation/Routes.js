import React from 'react';
import { Route } from "react-router-dom";
import Gallery from '../gallery/Gallery';
import Details from '../details/Details';

export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Gallery} exact />
        <Route path="/:id" component={Details} exact />
      </div>
    )
  }
};