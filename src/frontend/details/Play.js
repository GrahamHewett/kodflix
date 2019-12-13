import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Loader from '../../common/loader/Loader'

export default function Play(props) {

  // const id = useParams()
  const [error, setError] = useState(null);
  const [show, setShow] = useState([]);

  React.useEffect(() => {
    fetch(`/show/${props.match.params.id}`)
      .then(res => res.json())
      .then(
        show => setShow(show),
        error => setError(error)
      );
  }, []);

return show && show.length === 0 ? <div id="container"><Loader /></div> :
  error || show.error === "not found!" ? <Redirect to="/not-found" /> :
    <div className='trailer'>
      <iframe width="100%" height="900px" title='Play Trailer'
        src={show.videoRef} frameBorder="0"
        allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
      </iframe>
    </div>
}