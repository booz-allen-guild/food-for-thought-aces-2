import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Albums from './Albums';

const App = () => (
  <div className="App">
    <Router>
      <header>
        <Link to="/">
          <h1>Placeholder Photos</h1>
        </Link>
      </header>

      <Switch>
        <Route path="/albums" component={Albums} />
        <Route path="/about" component={About} />
        <Route component={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
