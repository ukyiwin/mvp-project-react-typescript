"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Editor_1 = require("Components/Editor");
const react_select_plus_1 = require("react-select-plus");
const Query_1 = require("Graphql/Query");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
require("react-select-plus/dist/react-select-plus.css");
require("./style.css");
class ComposeWrite extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            title: null,
            body: null,
            category: [],
            removeSelected: true,
            value: [],
        };
        this.handleChange = (value) => {
            this.setState({ value });
            // console.log(`Selected: ${selectedOption.label}`);
        };
    }
    addInterestContent() {
        this.props.client.query({
            query: Query_1.ALL_INTEREST
        }).then(result => {
            // tslint:disable-next-line:no-any
            let tempList = [];
            result.data.allInterest.map(interest => {
                const temp = { value: interest.id, label: interest.name };
                tempList.push(temp);
            });
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ category: tempList });
        });
    }
    componentDidMount() {
        this.addInterestContent();
    }
    render() {
        const { value, category, title } = this.state;
        // tslint:disable-next-line:no-console
        console.log(title);
        return (React.createElement("div", { className: "uk-flex uk-width-1-1 uk-padding-small", style: { minHeight: '90vh' } },
            React.createElement("div", { className: "uk-container uk-card uk-card-default uk-padding \r\n            uk-width-1-1 uk-container-expand", style: { textAlign: 'center' } },
                React.createElement("div", { className: "uk-width-1-1 uk-flex uk-flex-stretch" },
                    React.createElement("div", { className: "uk-width-3-4@m uk-width-1-1@s" },
                        React.createElement(Editor_1.default, { contentState: this.state.title, title: "Title", config: { debug: true, read_only: false } }),
                        React.createElement(Editor_1.default, { contentState: this.state.body, config: { debug: false, read_only: false } })),
                    React.createElement("div", { className: "uk-width-1-4@m uk-width-1-1@s" },
                        React.createElement("div", { className: "uk-width-1-1 uk-margin-small-bottom" },
                            React.createElement("button", { className: "uk-button uk-button-default uk-width-1-2", type: "button", style: { borderBottomLeftRadius: 10, borderTopLeftRadius: 10 } }, "Draft"),
                            React.createElement("button", { className: "uk-button uk-button-primary uk-width-1-2", type: "button", style: { borderBottomRightRadius: 10, borderTopRightRadius: 10 } }, "Publish")),
                        !this.props.allInterest.loading ? React.createElement(react_select_plus_1.default, { name: "form-field-name", value: value, onChange: this.handleChange, placeholder: "Add categories or interest", multi: true, closeOnSelect: true, removeSelected: this.state.removeSelected, simpleValue: false, options: category }) : null)))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.ALL_INTEREST, {
    name: 'allInterest',
}))(ComposeWrite));
//# sourceMappingURL=index.js.map