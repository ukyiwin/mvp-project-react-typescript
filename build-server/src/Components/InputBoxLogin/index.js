"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const Query_1 = require("Graphql/Query");
// tslint:disable-next-line:no-any
class InputBoxLogin extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client.query({
                query: Query_1.USER_EXIST,
                variables: {
                    email: this.state.text
                }
            }).then(({ data }) => {
                data.userExist ?
                    this.props.history.push({
                        pathname: '/login',
                        email: this.state.text
                    }) :
                    this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text
                    });
                this.setState({ loading: false });
            }).catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        const { loading } = this.state;
        return (React.createElement("div", { className: "" },
            React.createElement("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase" }, "unizonn"),
            React.createElement("p", { className: " uk-text-center uk-margin uk-text-bold" }, "Friendly and inclusive community for students and academia"),
            React.createElement("div", { className: "uk-flex-stretch" },
                React.createElement("form", { onSubmit: this.checkUser, className: "uk-margin uk-flex-stretch", "uk-margin": true },
                    React.createElement("div", { className: "uk-margin uk-flex uk-width-1-1", "uk-margin": true },
                        React.createElement("div", { "uk-form-custom": "target: true", className: "uk-width-3-4@m uk-width-1-1@s" },
                            React.createElement("input", { type: "email", onChange: e => this.setState({ text: e.target.value }), value: this.state.text, required: true, className: "uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large", placeholder: "Enter email to signin or signup" })),
                        React.createElement("div", { className: "uk-width-1-4@m uk-width-1-1@s" }, loading ?
                            React.createElement("div", { "data-uk-spinner": "ratio: 1", style: { marginLeft: 15, color: 'green' } }) :
                            React.createElement("button", { className: "uk-button uk-button-primary uk-button-large", type: "submit" }, "GETSTARTED")))))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.USER_EXIST, {
    name: 'userExist',
    options: { variables: { email: '' } },
}))(InputBoxLogin));
//# sourceMappingURL=index.js.map