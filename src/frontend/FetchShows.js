import React from 'react';

export default class FetchShows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      shows: []
    };
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
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, shows } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {shows.map(show => (
            <li key={show.title}>
              <p>{show.title}</p> 
              <p>{show.synopsis}</p>
            </li>
          ))}
        </ul>
      );
    }
  }
}