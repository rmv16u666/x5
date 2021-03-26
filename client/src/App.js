import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import LoginForm from './features/LoginForm';
import Home from './features/Home';
import React, { Fragment } from 'react';
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory();



function App() { 

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
