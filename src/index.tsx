import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Containers/App';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
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
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import resolvers from 'Graphql/Resolvers';

const AUTH_TOKEN = 'token';

// const queueLink = new QueueLink();

const httpLink = new HttpLink({ uri: 'https://uniserve.now.sh/' });

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
    // Toast.message("You are offline")
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

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  // tslint:disable-next-line:align
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
