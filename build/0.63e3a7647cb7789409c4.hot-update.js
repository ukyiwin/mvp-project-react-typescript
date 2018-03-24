exports.id = 0;
exports.modules = {

/***/ "./src/Containers/Auth/Signup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);








class Signup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            userType: '',
            firstname: '',
            lastname: '',
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
        this.handleConPasswordChange = (evt) => {
            this.setState({ confirmPassword: evt.target.value });
        };
        this.handleUsernameChange = (evt) => {
            this.setState({ username: evt.target.value });
        };
        this.handleFnameChange = (evt) => {
            this.setState({ firstname: evt.target.value });
        };
        this.handleLnameChange = (evt) => {
            this.setState({ lastname: evt.target.value });
        };
        this.handleUserTypeChange = (evt) => {
            this.setState({ userType: evt.target.value });
        };
        this.handleGenderChange = (evt) => {
            this.setState({ gender: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password, username, firstname, lastname, gender, userType } = this.state;
            this.props
                .signup({
                variables: {
                    email,
                    password,
                    username,
                    firstname,
                    lastname,
                    userType,
                    gender,
                },
            })
                .then((result) => {
                const token = result.data.signup.token;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CURRENT_USER */], result.data.signup.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                this.props.history.replace('/add/profile');
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_5_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n                      uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin", style: { marginTop: 40 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Signup ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Username"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.username ? 'uk-form-danger' : ''} `, type: "text", value: this.state.username, required: true, onChange: this.handleUsernameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Firstname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.firstname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.firstname, required: true, onChange: this.handleFnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Lastname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "lastname", className: `uk-input ${errors.lastname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.lastname, required: true, onChange: this.handleLnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Email"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "email", className: `uk-input ${errors.email ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", id: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "confirmPassword" }, "Confirm Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `, type: "password", id: "confirmPassword", value: this.state.confirmPassword, required: true, onChange: this.handleConPasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Gender"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.gender, required: true, onChange: this.handleGenderChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select sex"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Male" }, "Male"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Female" }, "Female")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "I am a"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.userType, required: true, onChange: this.handleUserTypeChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select one"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Student" }, "Student"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Lecturer" }, "Lecturer")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "Sign Up"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Already have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/login" }, "Login now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__["d" /* SIGNUP_USER */], {
    name: 'signup',
}))(Signup)));


/***/ })

};
//# sourceMappingURL=0.63e3a7647cb7789409c4.hot-update.js.map