import React from 'react';
import  { Redirect, Route } from 'react-router-dom';
import { appAuth } from './auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
      appAuth.isAuthenticated ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      )
    )}/>
  )