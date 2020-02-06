import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Loader from "../../common/loader/Loader";

export default function Gallery() {
  const [error, setError] = useState(null);
  const [shows, setShows] = useState([]);

  React.useEffect(() => {
    fetch("/api/shows")
      .then(res => res.json())
      .then(
        result => setShows(result),
        error => setError(error)
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (shows && shows.length === 0) {
    return <Loader />;
  } else if (shows === undefined) {
    return <Redirect to="/not-found" />;
  } else {
    return <div className="gallery">
        {shows.map(show => (
          <div className="cover" key={show.id}>
            <h2>{show.title}</h2>
            <NavLink to={show.id} exact>
              <img
                src={require(`../../common/images/${show.id}.jpg`)}
                alt={`${show.title} Cover`}
              ></img>
            </NavLink>
          </div>
        ))}
    </div>
  }
}