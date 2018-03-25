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
/* harmony export (immutable) */ __webpack_exports__["b"] = httpLink;

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



/***/ }),

/***/ "./src/server.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Containers_App__ = __webpack_require__("./src/Containers/App/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__link__ = __webpack_require__("./src/link.ts");













// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

const links = [
    __WEBPACK_IMPORTED_MODULE_13__link__["a" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["b" /* httpLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["c" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["d" /* stateLink */],
];
let assets;
const syncLoadAssets = () => {
    assets = __webpack_require__("./build/assets.json");
};
syncLoadAssets();
const server = __WEBPACK_IMPORTED_MODULE_0_express__();
server
    .disable('x-powered-by')
    .use(__WEBPACK_IMPORTED_MODULE_0_express__["static"]("C:\\Users\\juicycleff\\Documents\\Projects\\Unizonn\\unizonn\\public"))
    .get('/*', (req, res) => {
    if (false) {
        // links.unshift(createPersistedQueryLink());
    }
    const client = new __WEBPACK_IMPORTED_MODULE_9_apollo_client___default.a({
        ssrMode: true,
        link: __WEBPACK_IMPORTED_MODULE_12_apollo_link__["ApolloLink"].from(links),
        cache: new __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__["InMemoryCache"](),
    });
    const context = {};
    const modules = [];
    const markup = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_loadable__["Capture"], { report: (moduleName) => modules.push(moduleName) },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_apollo__["ApolloProvider"], { client: client },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Containers_App__["a" /* default */], null)))));
    if (context.url) {
        res.redirect(context.url);
    }
    else {
        const bundles = Object(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json___default.a, modules);
        const chunks = bundles.filter((bundle) => bundle.file.endsWith('.js'));
        res.send(`<!doctype html>
      <html lang="">
      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet='utf-8' />
          <title>Razzle TypeScript</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          ${assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''}
            ${ false
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`}
      </head>
      <body>
          <div id="root">${markup}</div>
      </body>
  </html>`);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ })

};
//# sourceMappingURL=0.8fe0049aa4537fa7dcf5.hot-update.js.map