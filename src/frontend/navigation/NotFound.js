import React from 'react'
import { Link } from "react-router-dom";

export default NotFound;

const NotFound = () => {
    return (
        <div className="notFound">
            <p>Ooops, it looks like this page doesn't exist :(</p>
            <Link exact to="/">Back to Home</Link> 

        </div>
    );
};