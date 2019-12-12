import React from 'react';
import { NavLink, Redirect } from 'react-router-dom'
// import Loader from '../../common/loader/Loader'

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
             shows: result
           });
         }
        )
    }
    render() {
      const {shows} = this.state;

      if(shows === undefined) {
          return <Redirect to="/not-found" />
      } else {
        return (
          <div className = 'gallery'>
            {shows.map((show) =>
              <div className = "cover" key= {show.id}>
                <h2>{show.title}</h2>
                <NavLink to={show.id} exact >
                    <img src={require(`../../common/images/${show.id}.jpg`)} alt={`${show.title} Cover`}></img>
                </NavLink>
            </div>)}
          </div>)
        }
      }
    };
export default Gallery;