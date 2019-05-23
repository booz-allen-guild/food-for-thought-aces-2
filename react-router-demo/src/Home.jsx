import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h2 className="title">Welcome!</h2>
      <Link to={'/albums'} className="navLink">
        View the albums
      </Link>
      <Link to={'/about'} className="navLink">
        About this app
      </Link>
    </main>
  );
}

export default Home;
