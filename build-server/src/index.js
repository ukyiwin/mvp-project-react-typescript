"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const apollo_client_1 = require("apollo-client");
const apollo_link_http_1 = require("apollo-link-http");
const react_router_dom_1 = require("react-router-dom");
// import { setContext } from 'apollo-link-context';
// import QueueLink from 'apollo-link-queue';
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const apollo_link_ws_1 = require("apollo-link-ws");
const apollo_link_1 = require("apollo-link");
const apollo_link_state_1 = require("apollo-link-state");
const apollo_utilities_1 = require("apollo-utilities");
const apollo_link_retry_1 = require("apollo-link-retry");
const apollo_link_error_1 = require("apollo-link-error");
const react_apollo_1 = require("react-apollo");
const Resolvers_1 = require("Graphql/Resolvers");
const registerServiceWorker_1 = require("./registerServiceWorker");
const react_async_bootstrapper_1 = require("react-async-bootstrapper");
const react_async_component_1 = require("react-async-component");
require("./index.css");
const App_1 = require("./Containers/App");
const AUTH_TOKEN = 'token';
// const queueLink = new QueueLink();
const httpLink = new apollo_link_http_1.HttpLink({ uri: 'https://uniserver.now.sh' });
const defaults = { appState: 'INITIAL' };
const errorLink = apollo_link_error_1.onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => 
        // tslint:disable-next-line:no-console
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));
    }
    if (networkError) {
        // tslint:disable-next-line:no-console
        console.log(`[Network error]: ${networkError}`);
        // (networkError.statusCode === 401) ? logout();
    }
});
const middlewareLink = new apollo_link_1.ApolloLink((operation, forward) => {
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
const cache = new apollo_cache_inmemory_1.InMemoryCache();
// Authenticated httplink
const httpLinkAuth = middlewareLink.concat(httpLink);
const wsLink = new apollo_link_ws_1.WebSocketLink({
    uri: `wss://eu1.prisma.sh/rex-raphael-d760a5/unizonn/dev`,
    options: {
        reconnect: true,
        connectionParams: {
            Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN)}`
        }
    }
});
const retryLink = new apollo_link_retry_1.RetryLink();
const stateLink = apollo_link_state_1.withClientState({
    cache,
    resolvers: Resolvers_1.default,
    defaults
});
const link = apollo_link_1.split(
// split based on operation type
({ query }) => {
    const { kind, operation } = apollo_utilities_1.getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
}, wsLink, httpLinkAuth);
// apollo client setup
const client = new apollo_client_1.ApolloClient({
    link: apollo_link_1.ApolloLink.from([retryLink, errorLink, stateLink, link]),
    cache: new apollo_cache_inmemory_1.InMemoryCache(),
    connectToDevTools: true
});
String.prototype.truncString = function (add, max) {
    add = add || '...';
    return (this.length > max ? this.substring(0, max) + add : this);
};
String.prototype.lengthInMinutes = function () {
    let min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
        return 'less than a minute read';
    }
    else if (min <= 0.9 || min === 0.9) {
        return 'less than a minute read';
    }
    else {
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
const app = (React.createElement(react_apollo_1.ApolloProvider, { client: client },
    React.createElement(react_async_component_1.AsyncComponentProvider, { rehydrateState: asyncComponentsRehydrateState },
        React.createElement(react_router_dom_1.BrowserRouter, { forceRefresh: !supportsHistory },
            React.createElement(App_1.default, null)))));
const container = document.getElementById('root');
react_async_bootstrapper_1.default(app).then(() => ReactDOM.render(app, container));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map