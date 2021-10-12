import React from 'react'
import { Route , Redirect } from 'react-router-dom';

function isLogin() {
    return localStorage.getItem('userID')? true :false;
}

function PublicRoute({component:Component,  ...rest}) {
  return (
    <Route {...rest} render={ props =>(
        isLogin() ?
            <Redirect to='/dashboard' />:
            <Component />
    )
    } />
  );
}

export default PublicRoute;
