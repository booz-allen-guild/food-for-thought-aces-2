import React, { Component } from "react";
import { Switch, Link } from "react-router-dom";
import Route from "./StyledRoute";
import Photo from "./Photo";

class Album extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    const albumID = this.props.match.params.id;
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumID}/photos`)
      .then(res => res.json())
      .then(photos => this.setState({ photos: photos.slice(0, 12) }));
  }

  render() {
    const { album, match } = this.props;
    const { photos } = this.state;

    return (
      <div className="subContent">
        <h3>
          Album: <span className="light">{album ? album.title : null}</span>
        </h3>
        <h3>
          Id: <span className="light">{match.params.id}</span>
        </h3>
        <Switch>
          <Route
            path={`${match.url}/photos/:id`}
            render={props => {
              const photo = photos.find(
                p => p.id === Number(props.match.params.id)
              );
              return <Photo photo={photo} />;
            }}
          />
          <Route
            path={`${match.url}`}
            render={props => (
              <ul className="photos">
                {photos.map(p => (
                  <li key={p.id}>
                    <Link to={`${match.url}/photos/${p.id}`}>
                      <img src={p.thumbnailUrl} alt={""} />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          />
          }
        </Switch>
      </div>
    );
  }
}

export default Album;
