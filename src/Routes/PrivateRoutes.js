import React from 'react'
import { Route , Redirect } from 'react-router-dom';

function isLogin() {
    return localStorage.getItem('userID')? true :false;
}

function PrivateRoute({component:Component, ...rest}) {
  return (
    <Route {...rest} render={props => (
        isLogin() ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
  );
}

export default PrivateRoute;
