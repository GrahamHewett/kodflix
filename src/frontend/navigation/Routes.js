import React from 'react';
import { Switch, Route } from "react-router-dom";
import Gallery from '../gallery/Gallery';
import Details from '../details/Details';
import NotFound from '../navigation/NotFound';
import FetchShows from '../FetchShows';


export default class Routes extends React.Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/" component={Gallery} exact />
        <Route path="/not-found"component={NotFound} exact />
        <Route path="/fetch-test"component={FetchShows} exact />
        <Route path="/:id" component={Details} exact />
        </Switch>
      </div>
    )
  }
};