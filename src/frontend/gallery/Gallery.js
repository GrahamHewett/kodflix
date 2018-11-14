import React from 'react';
import { NavLink } from 'react-router-dom'

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          data: [{dummy: 'data'}]
        }
      }

    componentDidMount() {
       fetch("/rest/shows")
       .then(res => res.json())
       .then(
         (result) => {
           this.setState({
             isLoaded: true,
             data: result
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
        const { error, isLoaded, data} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
        return (<div className = 'gallery'>{data.map((movie) =>
            <div className = "cover" key= {movie.id}>
                <h2>{movie.title}</h2>
                <NavLink to={movie.id} exact >
                    <img src={require(`../${movie.id}.jpg`)} alt={`${movie.title} Cover`}></img>
                </NavLink>
            </div>)}</div>)
        }
      }
    };
export default Gallery;