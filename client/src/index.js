import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import App from './App';
import {createBrowserHistory} from 'history';

const httpLink = createHttpLink({
  uri: 'http://localhost:2000/graphql?',
});

export const history = createBrowserHistory();

const authLink = setContext((_, { headers }) => {  
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  if (!token){
    history.push('/login');
  }

  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token,
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


ReactDOM.render(
  <ApolloProvider client={client} >
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);