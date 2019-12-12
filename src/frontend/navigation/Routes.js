import React from 'react';
import { Switch, Route } from "react-router-dom";
import Gallery from '../gallery/Gallery';
import Details from '../details/DetailsNico';
import Play from '../details/Play';
import NotFound from '../navigation/NotFound';

export default class Routes extends React.Component {
  render() {
    return (
      <div id='views'>
        <Switch>
        <Route path="/" component={Gallery} exact />
        <Route path="/not-found"component={NotFound} exact />
        <Route path="/:id/play" component={Play} exact />
        <Route path="/:id" component={Details} exact />
        </Switch>
      </div>
    )
  }
};