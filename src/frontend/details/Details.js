import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import "./details.css";
import Loader from "../../common/loader/Loader";

export default function Details(props) {
  const {id} = useParams()
  const [error, setError] = useState(null);
  const [show, setShow] = useState([]);
  React.useEffect(() => {
    fetch(`/show/${id}`)
      .then(res => res.json())
      .then(
        show => setShow(show),
        error => setError(error)
      );
  }, [id]);

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