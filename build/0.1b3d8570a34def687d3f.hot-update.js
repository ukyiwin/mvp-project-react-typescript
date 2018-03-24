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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Utils_jwtHelper__ = __webpack_require__("./src/Utils/jwtHelper.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Theme_application_scss__ = __webpack_require__("./src/Theme/application.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Theme_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_Theme_application_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_scss__ = __webpack_require__("./src/Containers/App/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_link__ = __webpack_require__("./src/link.ts");















// import { cookies } from '../../link';
const Home = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const NotFound = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/NotFound/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Profile = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Profile/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const PublicHome = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Login = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Login/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Signup = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const ArticleDetail = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ArticleDetail/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Interest = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/interest.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Maps = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Maps/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Compose = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ComposeArticle/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Message = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Message/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const Forum = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Forum/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const FinishSignup = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/finishSignup.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
});
const SignupProfile = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/signupProfile.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_Components_Loading__["a" /* default */], null),
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
        this.props.client.query({
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["g" /* ME */]
        }).then((res) => {
            // dhjhj
        });
        const token = __WEBPACK_IMPORTED_MODULE_14_link__["a" /* cookies */].get(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* AUTH_TOKEN */]);
        /*cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });*/
        if (token !== null && token !== undefined) {
            const expired = Object(__WEBPACK_IMPORTED_MODULE_6_Utils_jwtHelper__["a" /* isTokenExpired */])(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            }
            else {
                __WEBPACK_IMPORTED_MODULE_14_link__["a" /* cookies */].remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* AUTH_TOKEN */], '', -1);
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
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["g" /* ME */],
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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { backgroundColor: '#e4e6eb' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Layouts_Header__["a" /* PrivateHeader */], { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, isAuthenticated: isAuthenticated })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: PublicHome, isAuthenticated: isAuthenticated })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, path: "/home", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, refreshToken: this.refreshToken, path: "/login", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, refreshToken: this.refreshToken, path: "/signup", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: FinishSignup, path: "/signup/complete", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { path: "/article/:slug", isAuthenticated: isAuthenticated, component: ArticleDetail }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Maps, path: "/library", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Message, path: "/message", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Forum, path: "/Forum", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Compose, path: "/write", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile/:id", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: NotFound, path: "*" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { path: "/logout", isAuthenticated: isAuthenticated, render: () => this._logout() })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["withApollo"])(App)));


/***/ }),

/***/ "./src/Containers/Forum/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__ = __webpack_require__("anchor-ui/theme-provider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__ = __webpack_require__("anchor-ui/search-box");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__ = __webpack_require__("anchor-ui/list");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__ = __webpack_require__("anchor-ui/list-item");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__ = __webpack_require__("anchor-ui/channel-header");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__ = __webpack_require__("anchor-ui/button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels__ = __webpack_require__("anchor-ui/icons/icon-channels");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people__ = __webpack_require__("anchor-ui/icons/icon-people");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css__ = __webpack_require__("./src/Containers/Forum/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__style_css__);














// import { compose } from 'react-apollo';
const ChatDetail = Object(__WEBPACK_IMPORTED_MODULE_3_react_async_component__["asyncComponent"])({
    resolve: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ChatDetail/index.tsx")),
    LoadingComponent: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["b" /* LoadingComponent */], null),
    ErrorComponent: ({ error }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, error.message) // Optional
});
const items = [{
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }, {
        primaryText: 'Rex Raphael',
        secondaryText: 'Been long brava',
        image: 'http://www.ghgh.gh/hjh.png'
    }];
class Forum extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_anchor_ui_theme_provider___default.a, { color: "#f2912c" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "App" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Forum"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { style: { height: '91vh', width: '100vw' }, className: "uk-width-1-1 uk-flex" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "chat-list", className: "uk-width-1-4 un-border-right", style: { backgroundColor: '#ffffff' } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_anchor_ui_search_box___default.a, { placeholder: "Search for channels and chat" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Channels", style: { height: '43.1vh' } }, items.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, avatar: item.image })))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_anchor_ui_list___default.a, { id: "chat-list", header: "Direct Chat", style: { height: '40vh' } }, items.map((item, index) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_anchor_ui_list_item___default.a, { key: index, primaryText: item.primaryText, secondaryText: item.secondaryText, avatar: item.image }))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_anchor_ui_channel_header___default.a, { name: "Channel", rightButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_anchor_ui_icons_icon_people___default.a, null)), leftButton: 
                            // tslint:disable-next-line:jsx-boolean-value
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_anchor_ui_button___default.a, { iconButton: true },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_anchor_ui_icons_icon_channels___default.a, null)) }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-flex", style: {} },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: ChatDetail, exact: true, path: "/forum/:id" })))))));
    }
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Forum;

/*
export default withRouter(compose(
  withApollo,
  graphql<Response, InputProps, Props>(GET_C, {
    name: 'login'})
)(Forum));*/ 


/***/ }),

/***/ "./src/Html.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
//tslint:disable


const Html = ({ assets, markup, client: { cache }, asyncState }) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", { lang: "en" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("head", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { charSet: "utf-8" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "mobile-web-app-capable", content: "yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "manifest", href: "/site.webmanifest" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "msapplication-TileColor", content: "#da532c" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "theme-color", content: "teal" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Poppins", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg", crossOrigin: "anonymous" }),
        assets.client.css
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "stylesheet", href: assets.client.css })
            : null,
         false
            ? React.createElement("script", { src: assets.client.js, defer: true })
            : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: assets.client.js, defer: true, crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "root" }, markup),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `,`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.ASYNC_COMPONENT_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(asyncState)};`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/jquery.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/bootstrap.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/owl.carousel.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/css3-animate-it.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./crack.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./timeago-in-words.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "/static/bundle.js", charSet: "UTF-8" }))));
/* harmony default export */ __webpack_exports__["a"] = (Html);


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__build_react_loadable_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Containers_App__ = __webpack_require__("./src/Containers/App/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_async_component__ = __webpack_require__("react-async-component");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_async_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_async_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_async_bootstrapper__ = __webpack_require__("react-async-bootstrapper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_async_bootstrapper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_async_bootstrapper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__link__ = __webpack_require__("./src/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_Html__ = __webpack_require__("./src/Html.tsx");














// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';


const links = [
    __WEBPACK_IMPORTED_MODULE_14__link__["b" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_14__link__["d" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_14__link__["e" /* stateLink */],
    __WEBPACK_IMPORTED_MODULE_14__link__["c" /* httpLinkAuth */]
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
    const client = new __WEBPACK_IMPORTED_MODULE_10_apollo_client___default.a({
        ssrMode: true,
        link: __WEBPACK_IMPORTED_MODULE_13_apollo_link__["ApolloLink"].from(links),
        cache: new __WEBPACK_IMPORTED_MODULE_12_apollo_cache_inmemory__["InMemoryCache"](),
    });
    const context = {};
    const modules = [];
    const asyncContext = Object(__WEBPACK_IMPORTED_MODULE_7_react_async_component__["createAsyncContext"])();
    const markup = (
    // tslint:disable-next-line:no-unused-expression
    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_react_async_component__["AsyncComponentProvider"], { asyncContext: asyncContext },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_11_react_apollo__["ApolloProvider"], { client: client },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6__Containers_App__["a" /* default */], null)))));
    const bundles = Object(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_5__build_react_loadable_json___default.a, modules);
    const chunks = bundles.filter((bundle) => bundle.file.endsWith('.js'));
    __WEBPACK_IMPORTED_MODULE_8_react_async_bootstrapper___default()(markup).then(() => {
        const asyncState = asyncContext.getState();
        Object(__WEBPACK_IMPORTED_MODULE_11_react_apollo__["renderToStringWithData"])(markup).then((content) => {
            res.status(200);
            const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_15_Html__["a" /* default */], { assets: assets, markup: markup, client: client, asyncState: asyncState });
            res.send(`<!doctype html>\n${Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(html)}`);
            res.end();
        })
            .catch((e) => {
            console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
            /* res.status(500);
            res.end(
              `An error occurred. Please submit ane:\n\n${
                e.stack
              }`
            );*/
            res.status(200);
            const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_15_Html__["a" /* default */], { assets: assets, markup: markup, client: client });
            res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`);
            res.end();
        });
    });
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ }),

/***/ "react-async-bootstrapper":
/***/ (function(module, exports) {

module.exports = require("react-async-bootstrapper");

/***/ }),

/***/ "react-async-component":
/***/ (function(module, exports) {

module.exports = require("react-async-component");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-loadable":
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "serialize-javascript":
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ })

};
//# sourceMappingURL=0.1b3d8570a34def687d3f.hot-update.js.map