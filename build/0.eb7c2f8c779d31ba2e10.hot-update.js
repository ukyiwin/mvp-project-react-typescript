exports.id = 0;
exports.modules = {

/***/ "./src/Containers/Auth/Login/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__("./src/Containers/Auth/Login/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./src/constants.ts");









class Login extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            password: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            console.log('error from');
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password } = this.state;
            this.props
                .login({
                variables: {
                    email,
                    password,
                },
            })
                .then((result) => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["b" /* CURRENT_USER */], result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                }
                else {
                    this.props.history.replace('/');
                }
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_6_uikit__["notification"](`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Login"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn login" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 sideBg uk-visible@m", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-flex-middle" }, ".")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Login ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: user" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: lock" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: `uk-button uk-button-text}` }, "Forgot password?")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-spinner uk-icon", "data-uk-spinner": "ratio: 1", style: { color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "LOGIN"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Don't have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/signup" }, "Sign up now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__["c" /* LOGIN_USER */], {
    name: 'login',
}))(Login)));


/***/ })

};
//# sourceMappingURL=0.eb7c2f8c779d31ba2e10.hot-update.js.map