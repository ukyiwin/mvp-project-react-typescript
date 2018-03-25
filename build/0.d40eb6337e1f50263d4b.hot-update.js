exports.id = 0;
exports.modules = {

/***/ "./src/Containers/App/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__ = __webpack_require__("react-cookie-banner");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_cookie_banner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Utils_jwtHelper__ = __webpack_require__("./src/Utils/jwtHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Theme_application_scss__ = __webpack_require__("./src/Theme/application.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_Theme_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_Theme_application_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style_scss__ = __webpack_require__("./src/Containers/App/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__link__ = __webpack_require__("./src/link.ts");
















const Home = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const NotFound = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/NotFound/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Profile = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Profile/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const PublicHome = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Login = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Login/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Signup = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const ArticleDetail = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ArticleDetail/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Interest = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/interest.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Maps = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Maps/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Compose = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ComposeArticle/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Message = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Message/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const Forum = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Forum/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const FinishSignup = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/finishSignup.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
const SignupProfile = __WEBPACK_IMPORTED_MODULE_5_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/signupProfile.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Loading__["a" /* default */], null),
});
class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isAuthenticated: false,
            token: '',
            expireToken: false,
            avatar: '',
            me: {
                id: '',
                firstname: '',
                lastname: '',
                email: '',
            },
        };
        this.refreshToken = (token) => {
            this.setState({
                token,
            });
            if (token !== '' && token !== undefined) {
                this.setState({
                    isAuthenticated: true,
                });
                // this.loadMe();
            }
        };
        this._logout = () => {
            // localStorage.removeItem(AUTH_TOKEN);
            this.setState({ isAuthenticated: false });
            this.setState({ token: '' });
            this.setState({ expireToken: false });
        };
    }
    componentWillMount() {
        const token = __WEBPACK_IMPORTED_MODULE_15__link__["a" /* cookies */].get(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */]);
        /*cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });*/
        if (token !== null && token !== undefined) {
            const expired = Object(__WEBPACK_IMPORTED_MODULE_7_Utils_jwtHelper__["a" /* isTokenExpired */])(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_15__link__["a" /* cookies */].remove(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], '', -1);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }
    }
    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_12_Graphql_Query__["g" /* ME */],
        })
            .then(({ data }) => {
            // tslint:disable-next-line:no-console
            console.log(data.me);
            this.setState({ me: data.me });
            if (data.me.completedProfile === 1) {
                this.props.history.replace('/add/profile');
            }
            else if (data.me.completedProfile === 2) {
                this.props.history.replace('/add/interest');
            }
            this.setState({ avatar: data.me.avata.url });
            // tslint:disable-next-line:no-console
            console.log(this.state.avatar);
        })
            .catch((error) => {
            // localStorage.removeItem(AUTH_TOKEN);
            if (error) {
                // tslint:disable-next-line:no-console
                console.log('grooom');
                // this.setState({isAuthenticated: false});
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        });
    }
    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { minHeight: '40vh', backgroundColor: '#e4e6eb' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__["CookiesProvider"], { cookies: __WEBPACK_IMPORTED_MODULE_15__link__["a" /* cookies */] },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__["CookieBannerUniversal"], { message: "Yes, we use cookies. If you don't like it change website, we won't miss you!", 
                        // tslint:disable-next-line:no-empty
                        onAccept: () => { }, cookie: "user-has-accepted-cookies" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Layouts_Header__["a" /* PrivateHeader */], { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, isAuthenticated: isAuthenticated })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: PublicHome, isAuthenticated: isAuthenticated })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, path: "/home", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, refreshToken: this.refreshToken, path: "/login", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, refreshToken: this.refreshToken, path: "/signup", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: FinishSignup, path: "/signup/complete", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { path: "/article/:slug", isAuthenticated: isAuthenticated, component: ArticleDetail }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Maps, path: "/library", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Message, path: "/message", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Forum, path: "/Forum", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Compose, path: "/write", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile/:id", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: NotFound, path: "*" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { path: "/logout", isAuthenticated: isAuthenticated, render: () => this._logout() })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_4_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_12_Graphql_Query__["g" /* ME */]))(App)));


/***/ }),

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

const httpLink = new __WEBPACK_IMPORTED_MODULE_1_apollo_link_http__["HttpLink"]({ uri: 'https://uniserver.now.sh' });
/* harmony export (immutable) */ __webpack_exports__["c"] = httpLink;

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
    __WEBPACK_IMPORTED_MODULE_13__link__["b" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["d" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["e" /* stateLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["c" /* httpLink */]
];
let assets;
String.prototype.truncString = function (add, max) {
    add = add || '...';
    return (this.length > max ? this.substring(0, max) + add : this);
};
String.prototype.lengthInMinutes = function () {
    const min = this.split(' ').length / 250;
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
              <title>Unizonn</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
              <meta name="mobile-web-app-capable" content="yes">
              <!--
                manifest.json provides metadata used when your web app is added to the
                homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
              -->
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="manifest" href="/site.webmanifest">
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
              <meta name="msapplication-TileColor" content="#da532c">
              <meta name="theme-color" content="teal">

              <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
              <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
              <link src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"></script>

              ${assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''}
              ${ false
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`}
              
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js"></script>
          </head>
          <body>
              <div id="root">${markup}</div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
              <script src="./crack.js"></script>
              <script src="./timeago-in-words.js"></script>
              <script>
                function anima() {
                  [].slice.call(document.querySelectorAll('.grid--effect-vega > .grid__item')).forEach(function(stackEl) {
                    new VegaFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-castor > .grid__item')).forEach(function(stackEl) {
                    new CastorFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-hamal > .grid__item')).forEach(function(stackEl) {
                    new HamalFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-polaris > .grid__item')).forEach(function(stackEl) {
                    new PolarisFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-alphard > .grid__item')).forEach(function(stackEl) {
                    new AlphardFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-altair > .grid__item')).forEach(function(stackEl) {
                    new AltairFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-rigel > .grid__item')).forEach(function(stackEl) {
                    new RigelFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-canopus > .grid__item')).forEach(function(stackEl) {
                    new CanopusFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-pollux > .grid__item')).forEach(function(stackEl) {
                    new PolluxFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-deneb > .grid__item')).forEach(function(stackEl) {
                    new DenebFx(stackEl);
                  });
                };
              </script>
          </body>
        </html>`);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ })

};
//# sourceMappingURL=0.d40eb6337e1f50263d4b.hot-update.js.map