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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_link_retry__ = __webpack_require__("apollo-link-retry");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_apollo_link_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_apollo_link_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Graphql_Resolvers__ = __webpack_require__("./src/Graphql/Resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_link_state__ = __webpack_require__("apollo-link-state");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_apollo_link_state___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_apollo_link_state__);





// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';




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
/* harmony export (immutable) */ __webpack_exports__["a"] = errorLink;

const httpLink = new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({ uri: 'https://uniserver.now.sh' });
/* unused harmony export httpLink */

const subscriptionLink = (config = {}) => new __WEBPACK_IMPORTED_MODULE_2_apollo_link_ws__["WebSocketLink"](Object.assign({ uri:  true
        ? 'ws://uniserver.now.sh'
        : 'wss://uniserver.now.sh', options: { reconnect: true } }, config));
/* unused harmony export subscriptionLink */

const queryOrMutationLink = (config = {}) => 
// turn on CDN support via GET
// createPersistedQueryLink({ useGETForHashedQueries: true }).concat(
new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"](Object.assign({}, config, { credentials: 'same-origin' }));
/* harmony export (immutable) */ __webpack_exports__["b"] = queryOrMutationLink;

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
const retryLink = new __WEBPACK_IMPORTED_MODULE_5_apollo_link_retry__["RetryLink"]();
/* harmony export (immutable) */ __webpack_exports__["c"] = retryLink;

const cache = new __WEBPACK_IMPORTED_MODULE_7_apollo_cache_inmemory__["InMemoryCache"]();
/* unused harmony export cache */

const stateLink = Object(__WEBPACK_IMPORTED_MODULE_8_apollo_link_state__["withClientState"])({
    cache,
    resolvers: __WEBPACK_IMPORTED_MODULE_6_Graphql_Resolvers__["a" /* default */],
    defaults
});
/* harmony export (immutable) */ __webpack_exports__["d"] = stateLink;



/***/ })

};
//# sourceMappingURL=0.73fd1f67cc6e205ecd23.hot-update.js.map