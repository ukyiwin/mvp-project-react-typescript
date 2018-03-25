exports.id = 0;
exports.modules = {

/***/ "./src/Components/InputBoxLogin/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class InputBoxLogin extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase" }, "unizonn"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: " uk-text-center uk-margin uk-text-bold" }, "Friendly and inclusive community for students and academia"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.checkUser, className: "uk-margin uk-flex-stretch", "uk-margin": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin uk-flex uk-width-1-1", "uk-margin": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-form-custom": "target: true", className: "uk-width-3-4@m uk-width-1-1@s" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", onChange: (e) => this.setState({ text: e.target.value }), value: this.state.text, required: true, className: "uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large", placeholder: "Enter email to signin or signup" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-4@m uk-width-1-1@s" }, loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1", style: { marginLeft: 15, color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-large", type: "submit" }, "GETSTARTED"))))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */], {
    name: 'userExist',
    options: { variables: { email: '' } },
}))(InputBoxLogin)));


/***/ }),

/***/ "./src/Containers/HomePublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__ = __webpack_require__("./src/Components/InputBoxLogin/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("./src/Containers/HomePublic/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);




const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#FF6AC1' } }, children);
const Yellow = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#EFF59B' } }, children);
const Lightblue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#9AEDFE' } }, children);
const Green = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57EE89' } }, children);
const Blue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57C7FF' } }, children);
const Gray = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#909090' } }, children);
class HomePublic extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            strokeDashOffset: 0,
            pinPin: false,
            pinUnpin: false,
        };
    }
    componentWillMount() {
        // dhsj
    }
    componentDidMount() {
        // kjk
    }
    componentWillUnmount() {
        // hjh
    }
    render() {
        // const { classes } = this.props;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-stretch " },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Home"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "bg1", className: "uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundOne", style: { height: '100vh' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__["a" /* default */], null))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundTwo", style: { height: '100vh' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-container-expand uk-flex", style: { marginTop: 80, elevation: 3, padding: 5, borderRadius: 8 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("iframe", { src: "//www.youtube.com/embed/a_ONcLi8tfY?autoplay=0&showinfo=0\n            &rel=0&modestbranding=1&playsinline=1", width: "560", height: "315", frameBorder: "1", "data-uk-responsive": true, "uk-video": "automute: true; autoplay: false" })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (HomePublic);


/***/ }),

/***/ "react-spring":
false

};
//# sourceMappingURL=0.e3a578a5c5d14f37bd1d.hot-update.js.map