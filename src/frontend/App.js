import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Routes from './navigation/Routes';
import './App.css';
import ReactGA from 'react-ga';
import Menu from './navigation/Menu'

class App extends Component {

  constructor(props) {
    super(props);
    ReactGA.initialize('UA-129505001-1')
    this.trackPageView(window.location);
    props.history.listen(location => {
      this.trackPageView(location);
    })
  }

  trackPageView(location) {
    console.log('XXX checking', location.pathname + location.search + location.hash)
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);