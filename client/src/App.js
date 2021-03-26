import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginForm from './features/LoginForm';
import Home from './features/Home';
import React, { Fragment } from 'react';

function App() {


  return (
    <Fragment>
      <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginForm} />
      </BrowserRouter>
    </Fragment>
  );

}

export default App;
