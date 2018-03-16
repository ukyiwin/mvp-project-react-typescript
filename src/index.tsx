import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { BrowserRouter } from 'react-router-dom';
// import { setContext } from 'apollo-link-context';
// import QueueLink from 'apollo-link-queue';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloLink, split, Operation , NextLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { getMainDefinition } from 'apollo-utilities';
import  { RetryLink } from 'apollo-link-retry';
import { onError } from 'apollo-link-error';
import { ApolloProvider } from 'react-apollo';
import resolvers from 'Graphql/Resolvers';
import registerServiceWorker from './registerServiceWorker';
import asyncBootstrapper from 'react-async-bootstrapper';
import { AsyncComponentProvider } from 'react-async-component';

import './index.css';
import App from './Containers/App';

const AUTH_TOKEN = 'token';

// const queueLink = new QueueLink();

const httpLink = new HttpLink({ uri: 'http://uniserver.now.sh' });

const defaults = { appState: 'INITIAL' };
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // tslint:disable-next-line:no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  }
  if (networkError) {
    // tslint:disable-next-line:no-console
    console.log(`[Network error]: ${networkError}`);
    // (networkError.statusCode === 401) ? logout();
  }
});

const middlewareLink = new ApolloLink((operation: Operation, forward: NextLink) => {
  // get the authentication token from local storage if it exists
  const authToken = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
    }
  });
  return forward(operation);
});

// This is the same cache you pass into new ApolloClient
const cache = new InMemoryCache();

// Authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink);

const wsLink = new WebSocketLink({
  uri: `wss://eu1.prisma.sh/rex-raphael-d760a5/unizonn/dev`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
    }
  }
});

const retryLink = new RetryLink();

const stateLink = withClientState({
  cache,
  resolvers,
  defaults
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLinkAuth,
);

// apollo client setup
const client = new ApolloClient({
  link: ApolloLink.from([retryLink, errorLink, stateLink, link]),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

String.prototype.truncString = function (this: string, add: string, max: number) {
  add = add || '...';
  return (this.length > max ? this.substring(0, max ) + add : this);
};

String.prototype.lengthInMinutes = function (this: string) {
  
    let min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
      return 'less than a minute read';
    } else if (min <= 0.9 || min === 0.9) {
      return 'less than a minute read';
    } else {
      return `${min} min read`;
    }
};

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

// Get any rehydrateState for the async components.
// eslint-disable-next-line no-underscore-dangle
const asyncComponentsRehydrateState = window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

const app = (
  <ApolloProvider client={client}>
    <AsyncComponentProvider rehydrateState={asyncComponentsRehydrateState}>
      <BrowserRouter forceRefresh={!supportsHistory} >
        <App />
      </BrowserRouter>
    </AsyncComponentProvider>
  </ApolloProvider>
);

const container = document.getElementById('root') as HTMLElement;
asyncBootstrapper(app).then(() => ReactDOM.render(app, container));

registerServiceWorker();
