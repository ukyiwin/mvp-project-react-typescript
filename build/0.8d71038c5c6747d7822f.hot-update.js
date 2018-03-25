exports.id = 0;
exports.modules = {

/***/ "./src/Containers/App/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Theme_application_css__ = __webpack_require__("./src/Theme/application.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Theme_application_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_Theme_application_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_scss__ = __webpack_require__("./src/Containers/App/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_loadable__);


// import { asyncComponent } from 'react-async-component';

// import NotFound from '../NotFound';






// import Profile from '../Profile';



const Home = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
});
const PublicHome = __WEBPACK_IMPORTED_MODULE_11_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Loading__["a" /* default */], null),
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
        /* const token = localStorage.getItem(AUTH_TOKEN);
        if (token !== null && token !== undefined) {
            const expired = isTokenExpired(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            } else {
                localStorage.removeItem(AUTH_TOKEN);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }*/
    }
    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_7_Graphql_Query__["c" /* ME */],
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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { minHeight: '90vh', backgroundColor: '#e4e6eb' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn Here"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_Layouts_Header__["a" /* PrivateHeader */], { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, isAuthenticated: isAuthenticated })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["c" /* PublicLayout */], { component: PublicHome, isAuthenticated: isAuthenticated })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, path: "/home", isAuthenticated: isAuthenticated })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_8_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Query__["c" /* ME */]))(App)));


/***/ }),

/***/ "./src/Containers/App/style.css":
false,

/***/ "./src/Containers/App/style.scss":
/***/ (function(module, exports) {



/***/ })

};
//# sourceMappingURL=0.8d71038c5c6747d7822f.hot-update.js.map