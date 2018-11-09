import React from 'react'
import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="notFound">
            <p>Ooops, it looks like this page doesn't exist :(</p>
            <Link exact to="/">Back to Home</Link> 

        </div>
    );
};

export default NotFound