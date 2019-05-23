import React from "react";
import { withRouter } from "react-router-dom";
import fakeAuth from "./utils/fakeAuth";

const AuthButton = ({ history }) =>
  fakeAuth.isAuthenticated ? (
    <button
      onClick={() => {
        fakeAuth.signout(() => history.push("/"));
      }}
      className="authButton"
    >
      Sign out
    </button>
  ) : (
    <button
      onClick={() => {
        fakeAuth.authenticate(() => history.push("/"));
      }}
      className="authButton"
    >
      Log in
    </button>
  );

export default withRouter(AuthButton);
