import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Switch , BrowserRouter as Router , Route} from 'react-router-dom'
import Login from './components/Login'
import DashBoard from './components/Dashboard';
import Register from './components/Register';
import PrivateRoute from './Routes/PrivateRoutes';
import PublicRoute from './Routes/PublicRoutes';
import Logout from './components/Logout'

ReactDOM.render(
    <Router>
      <Switch>
        <PublicRoute exact path='/' component={App} />
        <PublicRoute exact  path='/login' component={Login} />
        <PrivateRoute exact path='/dashboard' component={DashBoard} />
        <PrivateRoute exact path='/logout' component={Logout}  /> 
        <PublicRoute exact path='/register' component={Register} />
      </Switch>
    </Router>,
  document.getElementById('root')
);
