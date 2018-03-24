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
const cookies = new __WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__["Cookies"]('unizonn');
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
        const token = cookies.get(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */]);
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
                cookies.remove(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], '', -1);
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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_cookie_banner__["CookiesProvider"], { cookies: cookies },
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

/***/ "./src/Utils/jwtHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getTokenExpirationDate */
/* harmony export (immutable) */ __webpack_exports__["a"] = isTokenExpired;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode__ = __webpack_require__("jwt-decode");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jwt_decode__);

// tslint:disable-next-line:only-arrow-functions
function getTokenExpirationDate(token) {
    const decoded = __WEBPACK_IMPORTED_MODULE_0_jwt_decode___default()(token);
    if (!decoded.exp) {
        return null;
    }
    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
}
// tslint:disable-next-line:only-arrow-functions
function isTokenExpired(token) {
    const date = getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
        return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
}


/***/ }),

/***/ "jwt-decode":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ })

};
//# sourceMappingURL=0.8afdd75e5f787e3512f3.hot-update.js.map