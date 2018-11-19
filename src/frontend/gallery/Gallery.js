import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          shows: [],
        }
      }

    componentDidMount() {
       fetch("/rest/shows")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             shows: result
           });
         },
         (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        )
    }
    render() {
      const { error, isLoaded, shows } = this.state;

      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
          return <div className="loader">Loading</div>
      } else if (shows === undefined) {
          return <Redirect to="/not-found" />
      } else {
        return (<div className = 'gallery'>{shows.map((show) =>
            <div className = "cover" key= {show.id}>
                <h2>{show.title}</h2>
                <NavLink to={show.id} exact >
                    <img src={require(`../../common/images/${show.id}.jpg`)} alt={`${show.title} Cover`}></img>
                </NavLink>
            </div>)}</div>)
        }
      }
    };
export default Gallery;