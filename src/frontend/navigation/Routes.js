import React from 'react';
import { Switch, Route } from "react-router-dom";
import Gallery from '../gallery/Gallery';
import Details from '../details/Details';
import Play from '../details/Play';
import NotFound from '../navigation/NotFound';

const closeMenu = () => {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("views").style.marginLeft = "0";
  document.getElementById("views").style.opacity = "1";
};

export default function Routes() {
    return <div id='views' onClick={() => closeMenu()}>
      <Switch>
        <Route path="/" component={Gallery} exact />
        <Route path="/not-found"component={NotFound} exact />
        <Route path="/:id/play" component={Play} exact />
        <Route path="/:id" component={Details} exact />
      </Switch>
    </div>
};