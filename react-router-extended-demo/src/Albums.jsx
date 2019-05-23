import React, { Component } from "react";
import { Link, Switch } from "react-router-dom";
import Route from "./StyledRoute";
import Album from "./Album";

class Albums extends Component {
  state = {
    albums: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then(res => res.json())
      .then(albums => this.setState({ albums }));
  }

  render() {
    const { albums } = this.state;
    const { match } = this.props;

    return (
      <main>
        <h2 className="title">Albums</h2>
        <Switch>
          <Route
            path={`${match.url}/:id`}
            render={props => {
              const album = albums.find(
                a => a.id === Number(props.match.params.id)
              );
              return <Album album={album} {...props} />;
            }}
          />
          <Route
            path={`${match.url}`}
            render={props => (
              <ul>
                {albums.map(a => (
                  <li key={a.id}>
                    <Link to={`${match.url}/${a.id}`}>{a.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          />
        </Switch>
      </main>
    );
  }
}

export default Albums;
