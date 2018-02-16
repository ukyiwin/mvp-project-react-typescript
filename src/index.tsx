import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App';
import 'tachyons';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Apollo client http link setup
const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

// Auth link setup
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

// Apollo client initialization
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  // tslint:disable-next-line:align
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
