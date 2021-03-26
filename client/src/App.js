import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import LoginForm from './features/LoginForm';
import Home from './features/Home';
import React, { Fragment } from 'react';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();

// get the authentication token from local storage if it exists
export const auth_token = localStorage.getItem('token');


function App() { 
  if (!auth_token){
    history.push('/login');
  }

  return (
    <Fragment>
      <Router history={history} >
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={LoginForm} />
        </Switch>
      </Router >
    </Fragment>
  );

}

export default App;
