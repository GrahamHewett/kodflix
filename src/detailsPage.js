import React from 'react';
import { Link } from "react-router-dom";

const Details = (match) => (
  <div>
    <p>Hello, this will be the details page for {match.params.id} </p>
    <Link to = "/" exact>Back to List of Movies</Link> 
    </div>
);

  export default Details;

//Link to needed a nested link url