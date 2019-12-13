import React from "react";
import { withRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import Routes from "./navigation/Routes";
import Menu from "./navigation/Menu";
import "./App.css";

ReactGA.initialize("UA-129505001-1");
const browserHistory = createBrowserHistory();
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search);
  // ReactGA.pageview(location.pathname + location.search + location.hash);
});

function App() {
  React.useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  );
}

export default withRouter(App);