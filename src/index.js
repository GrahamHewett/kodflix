import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import * as serviceWorker from './frontend/serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />     
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, change unregister() 
// to register(). Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

if(module.hot) {
  module.hot.accept();
}
