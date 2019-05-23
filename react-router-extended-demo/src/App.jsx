import React from 'react';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Route from './StyledRoute';
import PrivateRoute from './PrivateRoute';
import AuthButton from './AuthButton';
import Home from './Home';
import About from './About';
import Albums from './Albums';
import Login from './Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <header>
          <Link to="/">
            <h1>Placeholder Photos</h1>
          </Link>
          <AuthButton />
        </header>

        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/albums" component={Albums} />
          <Route path="/about" component={About} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
