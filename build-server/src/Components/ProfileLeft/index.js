"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const Query_1 = require("Graphql/Query");
// tslint:disable-next-line:no-any
class ProfileLeft extends React.Component {
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
        // const { loading } = this.state;
        return (React.createElement("div", null,
            React.createElement("div", { className: "uk-card uk-card-default uk-width-1-1" },
                React.createElement("h1", null, "Rex Raphael"),
                React.createElement("h1", null, "21 Connections"),
                React.createElement("p", null, "Xfullstack Engineer, Dev Ops Manager, with great love for javascript and nodejs"))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.USER_EXIST, {
    name: 'user',
    options: { variables: { email: '' } },
}))(ProfileLeft));
//# sourceMappingURL=index.js.map