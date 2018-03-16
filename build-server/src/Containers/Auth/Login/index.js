"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const react_helmet_1 = require("react-helmet");
const Mutation_1 = require("Graphql/Mutation");
const helpers_1 = require("Utils/helpers");
const UIkit = require("uikit");
require("./style.css");
const constants_1 = require("../../../constants");
class Login extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            password: '',
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
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password } = this.state;
            this.props.login({
                variables: {
                    email,
                    password
                }
            }).then(result => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                localStorage.setItem(constants_1.AUTH_TOKEN, token);
                localStorage.setItem(constants_1.CURRENT_USER, result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                }
                else {
                    this.props.history.replace('/');
                }
            }).catch(err => {
                this.setState({ loading: false });
                UIkit.notification(`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email: email });
        }
    }
    canBeSubmitted() {
        const errors = helpers_1.validateLogin(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return !isDisabled;
    }
    render() {
        const errors = helpers_1.validateLogin(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (React.createElement("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Login"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn login" })),
            React.createElement("div", { className: "uk-width-2-5 sideBg uk-visible@m", id: "sideBg" },
                React.createElement("div", { className: "uk-flex uk-flex-stretch uk-flex-middle" }, ".")),
            React.createElement("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex \r\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                React.createElement("form", { className: "uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("h3", { className: "uk-heading-primary uk-align-center" }, "Login ")),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("div", { className: "uk-inline uk-width-1-1" },
                            React.createElement("span", { className: "uk-form-icon", "uk-icon": "icon: user" }),
                            React.createElement("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("div", { className: "uk-inline uk-width-1-1" },
                            React.createElement("span", { className: "uk-form-icon", "uk-icon": "icon: lock" }),
                            React.createElement("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("a", { className: `uk-button uk-button-text}` }, "Forgot password?")),
                    React.createElement("div", { className: "uk-margin" }, this.state.loading ?
                        React.createElement("div", { className: "uk-spinner uk-icon", "data-uk-spinner": "ratio: 1", style: { color: 'green' } }) :
                        React.createElement("button", { className: `uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "LOGIN")),
                    React.createElement("br", null),
                    React.createElement("hr", { className: "uk-divider-icon" }),
                    React.createElement("div", { className: "uk-margin" },
                        React.createElement("p", { className: `uk-button uk-button-text}` }, "Don't have an account?"),
                        React.createElement(react_router_dom_1.Link, { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/signup" }, "Sign up now"))))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Mutation_1.LOGIN_USER, {
    name: 'login'
}))(Login));
//# sourceMappingURL=index.js.map