// tslint:disable
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
// import { setContext } from 'apollo-link-context';
// import QueueLink from 'apollo-link-queue';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { Hermes } from 'apollo-cache-hermes';
import { ApolloProvider } from 'react-apollo';
import registerServiceWorker from './registerServiceWorker';
import { ApolloLink } from 'apollo-link';
import 'isomorphic-fetch';
import asyncBootstrapper from 'react-async-bootstrapper';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// import { AsyncComponentProvider } from 'react-async-component';
import './Containers/App/style.scss';
import App from './Containers/App';
import {
  errorLink,
  httpLinkAuth,
  requestLink,
  retryLink,
  stateLink
} from './link';
import { AsyncComponentProvider } from 'react-async-component';

const links = [
  errorLink,
  retryLink,
  stateLink,
  httpLinkAuth
];

OfflinePluginRuntime.install();
/*
// const queueLink = new QueueLink();
const httpLink = new HttpLink({ uri: 'https://uniserver.now.sh' });

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

const middlewareLink = new ApolloLink((operation: any, forward: any) => {
  // get the authentication token from local storage if it exists
  const authToken = 'j';
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

/*const wsLink = new WebSocketLink({
  uri: `ws://uniserver.now.sh`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${'kjk'}`
    }
  }
});
// Create WebSocket client
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  httpLinkAuth,
);
*/

// apollo client setup
export const client = new ApolloClient({
  ssrForceFetchDelay: 100,
  link: ApolloLink.from(links),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  connectToDevTools: true,
});

String.prototype.truncString = function(this: string, add: string, max: number) {
  add = add || '...';
  return (this.length > max ? this.substring(0, max) + add : this);
};

String.prototype.lengthInMinutes = function(this: string) {
  
    const min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
      return 'less than a minute read';
    } else if (min <= 0.9 || min === 0.9) {
      return 'less than a minute read';
    } else {
      return `${min} min read`;
    }
};

// Get any rehydrateState for the async components.
// eslint-disable-next-line no-underscore-dangle
const asyncComponentsRehydrateState = window.__ASYNC_COMPONENTS_REHYDRATE_STATE__;

const container = document.getElementById('root') as HTMLElement;

/// registerServiceWorker();
// import App from './App';

const app = (
  <AsyncComponentProvider rehydrateState={asyncComponentsRehydrateState}>
    <ApolloProvider client={client}>
        <BrowserRouter>
          <App maintenanceMode={process.env.MAINTANANCE} />
        </BrowserRouter>
    </ApolloProvider>
  </AsyncComponentProvider>
);

asyncBootstrapper(app).then(() => ReactDOM.render(app, container));

if (module.hot) {
  module.hot.accept();
}
