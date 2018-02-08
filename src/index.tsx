import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App';
import 'tachyons';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const httpLink = new HttpLink({ uri: 'http://localhost:4000' });

const client = new ApolloClient({
  link: httpLink,
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
