"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const Mutation_1 = require("Graphql/Mutation");
const helpers_1 = require("Utils/helpers");
const UIkit = require("uikit");
const constants_1 = require("../../../constants");
require("./style.css");
class Signup extends React.Component {
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
            loading: false
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
            this.props.signup({
                variables: {
                    email,
                    password,
                    username,
                    firstname,
                    lastname,
                    userType,
                    gender
                }
            }).then(result => {
                const token = result.data.signup.token;
                localStorage.setItem(constants_1.AUTH_TOKEN, token);
                localStorage.setItem(constants_1.CURRENT_USER, result.data.signup.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                this.props.history.replace('/add/profile');
            }).catch(err => {
                this.setState({ loading: false });
                UIkit.notification(`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    canBeSubmitted() {
        const errors = helpers_1.validateSignup(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email: email });
        }
    }
    render() {
        const errors = helpers_1.validateSignup(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (React.createElement("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { backgroundColor: '#ffffff' } },
            React.createElement("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                React.createElement("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    React.createElement("ul", { className: "uk-slideshow-items" },
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        React.createElement("li", null,
                            React.createElement("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    React.createElement("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    React.createElement("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            React.createElement("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex \r\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                React.createElement("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    React.createElement("div", { className: "uk-margin", style: { marginTop: 40 } },
                        React.createElement("h3", { className: "uk-heading-primary uk-align-center" }, "Signup ")),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "firstname" }, "Username"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { id: "firstname", className: `uk-input ${errors.username ? 'uk-form-danger' : ''} `, type: "text", value: this.state.username, required: true, onChange: this.handleUsernameChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "firstname" }, "Firstname"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { id: "firstname", className: `uk-input ${errors.firstname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.firstname, required: true, onChange: this.handleFnameChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "lastname" }, "Lastname"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { id: "lastname", className: `uk-input ${errors.lastname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.lastname, required: true, onChange: this.handleLnameChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "email" }, "Email"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { id: "email", className: `uk-input ${errors.email ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Password"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", id: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "confirmPassword" }, "Confirm Password"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("input", { className: `uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `, type: "password", id: "confirmPassword", value: this.state.confirmPassword, required: true, onChange: this.handleConPasswordChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Gender"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("select", { className: "uk-select", value: this.state.gender, required: true, onChange: this.handleGenderChange },
                                React.createElement("option", { value: "" }, "Select sex"),
                                React.createElement("option", { value: "Male" }, "Male"),
                                React.createElement("option", { value: "Female" }, "Female")))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "I am a"),
                        React.createElement("div", { className: "uk-form-controls" },
                            React.createElement("select", { className: "uk-select", value: this.state.userType, required: true, onChange: this.handleUserTypeChange },
                                React.createElement("option", { value: "" }, "Select one"),
                                React.createElement("option", { value: "Student" }, "Student"),
                                React.createElement("option", { value: "Lecturer" }, "Lecturer")))),
                    React.createElement("div", { className: "uk-margin" }, this.state.loading ?
                        React.createElement("div", { "data-uk-spinner": "ratio: 1" })
                        :
                            React.createElement("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "Sign Up")),
                    React.createElement("hr", { className: "uk-divider-icon" }),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("p", { className: `uk-button uk-button-text}` }, "Already have an account?"),
                        React.createElement(react_router_dom_1.Link, { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/login" }, "Login now"))))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Mutation_1.SIGNUP_USER, {
    name: 'signup'
}))(Signup));
//# sourceMappingURL=index.js.map