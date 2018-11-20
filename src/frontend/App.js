import React, { Component } from 'react';
import Routes from './navigation/Routes';
import './App.css';
import ReactGA from 'react-ga';


class App extends Component {

  constructor({ history, location }) {
    super();
    ReactGA.initialize('UA-129505001-1');
    this.trackPageView(location);
    history.listen((location) => this.trackPageView(location));
  }
   trackPageView(location) {
    ReactGA.pageview(location.pathname + location.search + location.hash);
  }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;