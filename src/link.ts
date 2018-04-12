import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { onError } from 'apollo-link-error';
import { getMainDefinition } from 'apollo-utilities';
import { Cookies } from 'react-cookie-banner';
import { SubscriptionClient } from 'subscriptions-transport-ws';
// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import { RetryLink } from 'apollo-link-retry';
import resolvers from 'Graphql/Resolvers';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';
import fetch from 'node-fetch';
import WebSocket from 'ws';
import { BatchHttpLink } from 'apollo-link-batch-http';

// const link = new BatchHttpLink({ uri: "/graphql" });
const AUTH_TOKEN = 'token';
export const cookies = new Cookies('unizonn');

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  /*
  onError receives a callback in the event a GraphQL or network error occurs.
  This example is a bit contrived, but in the real world, you could connect
  a logging service to the errorLink or perform a specific action in response
  to an error.
  */
  // tslint:disable-next-line:curly
  if (graphQLErrors)
    graphQLErrors.map(({ message, location, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`
      )
    );
  // tslint:disable-next-line:curly
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const httpLink = new HttpLink({ uri: 'http://uniserver.herokuapp.com', fetch });

export const middlewareLink = new ApolloLink((operation: any, forward: any) => {
  // get the authentication token from local storage if it exists
  const authToken = cookies.get(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: authToken ? `Bearer ${authToken}` : '',
    }
  });
  return forward(operation);
});

export const httpLinkAuth = middlewareLink.concat(httpLink);

export const subscriptionLink = (config = {}) =>
  new WebSocketLink({
    uri:
      process.env.NODE_ENV !== 'production'
        ? 'ws://uniserver.now.sh'
        : 'wss://uniserver.now.sh',
    options: { reconnect: true },
    ...config,
  });

export const queryOrMutationLink = (config = {}) =>
  // turn on CDN support via GET
  // createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
    new HttpLink({
      ...config,
      credentials: 'same-origin',
    });
  // );

export const requestLink = ({ queryOrMutationLink, subscriptionLink }) =>
  /*
    This link checks if the operation is a subscription.
    If it is, we use our subscription link to retrieve data over WebSockets.
    If it is a query or mutation, we retrieve data over HTTP.
  */
  ApolloLink.split(
    ({ query }) => {
      const { kind, operation } = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    subscriptionLink,
    queryOrMutationLink
);

export const wsLink = new WebSocketLink({
  uri: `ws://uniserver.herokuapp.com`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: cookies.get(AUTH_TOKEN) ? `Bearer ${cookies.get(AUTH_TOKEN)}` : '',
    },
  }
});

export const wsClient = new SubscriptionClient(`ws://uniserver.herokuapp.com`, {
  reconnect: true,
  connectionParams: {
    Authorization: cookies.get(AUTH_TOKEN) ? `Bearer ${cookies.get(AUTH_TOKEN)}` : '',
  },
},                                             WebSocket);

export const wsLinks = new WebSocketLink(wsClient);

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
export const netLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLinks,
  httpLink,
);

const defaults = { appState: 'INITIAL' };

export const retryLink = new RetryLink();

export const cache = new InMemoryCache();

export const stateLink = withClientState({
  cache,
  resolvers,
  defaults
});