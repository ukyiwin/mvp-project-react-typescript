exports.id = 0;
exports.modules = {

/***/ "./src/link.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__ = __webpack_require__("apollo-link-http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_link_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_link_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__ = __webpack_require__("apollo-link-ws");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_error__ = __webpack_require__("apollo-link-error");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_link_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_apollo_link_error__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_utilities__ = __webpack_require__("apollo-utilities");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_utilities___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_apollo_utilities__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__ = __webpack_require__("react-cookie-banner");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__ = __webpack_require__("apollo-link-retry");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Resolvers__ = __webpack_require__("./src/Graphql/Resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_state__ = __webpack_require__("apollo-link-state");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_link_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_link_state__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_node_fetch__ = __webpack_require__("node-fetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_node_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_node_fetch__);






// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';





const AUTH_TOKEN = 'token';
const cookies = new __WEBPACK_IMPORTED_MODULE_5_react_cookie_banner__["Cookies"]('unizonn');
/* harmony export (immutable) */ __webpack_exports__["a"] = cookies;

const errorLink = Object(__WEBPACK_IMPORTED_MODULE_3_apollo_link_error__["onError"])(({ graphQLErrors, networkError }) => {
    /*
    onError receives a callback in the event a GraphQL or network error occurs.
    This example is a bit contrived, but in the real world, you could connect
    a logging service to the errorLink or perform a specific action in response
    to an error.
    */
    // tslint:disable-next-line:curly
    if (graphQLErrors)
        graphQLErrors.map(({ message, location, path }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`));
    // tslint:disable-next-line:curly
    if (networkError)
        console.log(`[Network error]: ${networkError}`);
});
/* harmony export (immutable) */ __webpack_exports__["b"] = errorLink;

const httpLink = new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({ uri: 'https://uniserver.now.sh', fetch: __WEBPACK_IMPORTED_MODULE_10_node_fetch___default.a });
/* unused harmony export httpLink */

const middlewareLink = new __WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"]((operation, forward) => {
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
/* unused harmony export middlewareLink */

const httpLinkAuth = middlewareLink.concat(httpLink);
/* harmony export (immutable) */ __webpack_exports__["c"] = httpLinkAuth;

const subscriptionLink = (config = {}) => new __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__["WebSocketLink"](Object.assign({ uri:  true
        ? 'ws://uniserver.now.sh'
        : 'wss://uniserver.now.sh', options: { reconnect: true } }, config));
/* unused harmony export subscriptionLink */

const queryOrMutationLink = (config = {}) => 
// turn on CDN support via GET
// createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"](Object.assign({}, config, { credentials: 'same-origin' }));
/* unused harmony export queryOrMutationLink */

// );
const requestLink = ({ queryOrMutationLink, subscriptionLink }) => 
/*
  This link checks if the operation is a subscription.
  If it is, we use our subscription link to retrieve data over WebSockets.
  If it is a query or mutation, we retrieve data over HTTP.
*/
__WEBPACK_IMPORTED_MODULE_0_apollo_link__["ApolloLink"].split(({ query }) => {
    const { kind, operation } = Object(__WEBPACK_IMPORTED_MODULE_4_apollo_utilities__["getMainDefinition"])(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
}, subscriptionLink, queryOrMutationLink);
/* unused harmony export requestLink */

const defaults = { appState: 'INITIAL' };
const retryLink = new __WEBPACK_IMPORTED_MODULE_6_apollo_link_retry__["RetryLink"]();
/* harmony export (immutable) */ __webpack_exports__["d"] = retryLink;

const cache = new __WEBPACK_IMPORTED_MODULE_8_apollo_cache_inmemory__["InMemoryCache"]();
/* unused harmony export cache */

const stateLink = Object(__WEBPACK_IMPORTED_MODULE_9_apollo_link_state__["withClientState"])({
    cache,
    resolvers: __WEBPACK_IMPORTED_MODULE_7_Graphql_Resolvers__["a" /* default */],
    defaults
});
/* harmony export (immutable) */ __webpack_exports__["e"] = stateLink;



/***/ }),

/***/ "node-fetch":
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ })

};
//# sourceMappingURL=0.8975ad4f5b70eacee783.hot-update.js.map