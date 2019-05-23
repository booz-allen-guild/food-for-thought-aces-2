import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Route from "./StyledRoute";
import fakeAuth from "./utils/fakeAuth";

const PrivateRoute = ({ component: Component, render, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        render ? (
          render(props)
        ) : (
          <Component {...props} />
        )
      ) : (
        <Fragment>
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        </Fragment>
      )
    }
  />
);

export default PrivateRoute;
