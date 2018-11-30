import React, { Component } from 'react';
import Routes from './navigation/Routes';
import './App.css';
import ReactGA from 'react-ga';
import Menu from './navigation/Menu'
import { createBrowserHistory } from "history";

class App extends Component {

  constructor(props) {
    super(props);

    ReactGA.initialize('UA-129505001-1', {
    gaOptions: {
      siteSpeedSampleRate: 100
    }
    });

    const history = createBrowserHistory();
    const location = history.location;
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location))
  }

  trackPageView(location) {
    // ReactGA.pageview(location.pathname + location.search + location.hash)
    ReactGA.pageview(window.location.pathname + window.location.search + window.location.hash);

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

export default App;