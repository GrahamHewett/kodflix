import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function detailsPage() {
    return (
      <Router>
        <div>
          <li><Link to="/details">Linkedy Link</Link></li>
          <Route path="/details" component={details} />
        </div>
      </Router>
    );
  }

  function details() {
    return (
      <div>
        <p>Hello, this will be the details page 
for each Movie TV show :)</p>
      </div>
    );
  }

  export default detailsPage;

//Link to needed a nested link url