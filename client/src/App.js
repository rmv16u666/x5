import './App.css';
import { Switch, Route, Router } from 'react-router-dom';
import LoginForm from './features/LoginForm';
import Home from './features/Home';
import Authors from './features/Authors';
import Books from './features/Books';
import React, { Fragment } from 'react';
import {createBrowserHistory} from 'history';
import NavBar from './layout/NavBar';
import { Container } from 'semantic-ui-react';

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
        <NavBar />
        <Container style={{ marginTop: '7em' }}>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/login' component={LoginForm} />
            <Route path='/books' component={Books} />
            <Route path='/authors' component={Authors} />          
          </Switch>
        </Container>
      </Router >
      
    </Fragment>
  );

}

export default App;
