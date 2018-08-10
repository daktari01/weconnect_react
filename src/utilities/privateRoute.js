import React from "react";
import  { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

export const PrivateRoute = ({ component: Component, ...rest,  isAuthenticated}) => (
  <Route {...rest} render={props => (
    isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: "/login",
        state: { from: props.location }
      }}/>
    )
  )}/>
);
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
  location: PropTypes.object,
  component: PropTypes.element
};