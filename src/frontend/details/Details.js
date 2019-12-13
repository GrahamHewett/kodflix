import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./details.css";
import Loader from "../../common/loader/Loader";

export default function Details(props) {
  const [error, setError] = useState(null);
  const [show, setShow] = useState([]);

  React.useEffect(() => {
    fetch(`/shows/${props.match.params.id}`)
      .then(res => res.json())
      .then(
        show => setShow(show),
        error => setError(error)
      );
  }, []);

  return show && show.length === 0 ? <div id="container"><Loader /></div> :
    error || show.error === "not found!" ? <Redirect to="/not-found" /> :
      <div id="container"
        style={{
          backgroundImage: `url(${require(`../../common/images/${show.id}-wallpaper.jpg`)})`
      }}>
        {/* <div className="title"><h1 key={show.title}>{show.title}</h1></div> */}
        <div className="synopsis">
          <p>{show.synopsis}</p>
        </div>
        <div className="details-image"></div>
      </div>
}