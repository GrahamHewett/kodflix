import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Details = () => (
  <div>
    <p>Hello, this will be the details page for each Movie &amp; TV show :) </p>
    <Link to = "/" exact>Back to List of Movies</Link> 
    </div>
);

  export default Details;

//Link to needed a nested link url