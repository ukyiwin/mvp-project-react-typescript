"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_apollo_1 = require("react-apollo");
const react_stack_grid_1 = require("react-stack-grid");
const UIkit = require("uikit");
const Query_1 = require("Graphql/Query");
// import { User } from 'CustomTypings/schema';
const InterestItem_1 = require("Components/InterestItem");
const Mutation_1 = require("Graphql/Mutation");
require("./style.css");
class InterestPage extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            selected: ['1'],
            loading: false
        };
        this.onSelectAdd = (id) => {
            let temp = this.state.selected;
            let index = this.state.selected.indexOf(id);
            if (index === -1) {
                temp.push(id);
            }
            else {
                temp.splice(index, 1);
            }
            this.setState({ selected: temp });
        };
        this.onSelectRemove = (id) => {
            this.state.selected.indexOf(id);
        };
    }
    // tslint:disable-next-line:no-any
    save() {
        // tslint:disable-next-line:no-console
        console.log(this.state.selected);
        let inter = [];
        inter = this.state.selected;
        this.props.client.mutate({
            mutation: Mutation_1.ADD_INTERESTS,
            variables: {
                interests: inter
            }
        }).then(result => {
            this.props.history.push('/signup/complete');
        }).catch(err => {
            UIkit.notification(`${err.message}`, { status: 'danger', pos: 'top-right' });
        });
    }
    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.interests.allInterest);
        if (this.props.interests.loading) {
            return React.createElement("div", null, "Loading");
        }
        return (React.createElement("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: '#ffffff' } },
            React.createElement("h1", { className: "uk-postion-top-center uk-text-center", style: { marginTop: 50 } }, "Lets pick your interest"),
            React.createElement("p", { className: "uk-postion-top-center uk-text-center uk-padding" }, "Select minimum of 5 interest"),
            React.createElement(react_stack_grid_1.default, { columnWidth: 200 }, this.props.interests.allInterest.map((data, i) => React.createElement(InterestItem_1.default, { key: i, name: data.name, id: data.id, url: data.avatar, checked: this.state.selected.indexOf(data.id) === -1 ? false : true, onClickAdd: this.onSelectAdd }))),
            React.createElement("div", { className: "uk-padding-small", style: { position: 'fixed', bottom: 0, right: 40 } },
                React.createElement("button", { className: "uk-button uk-button-primary", disabled: this.state.selected.length > 1 ? false : true, onClick: () => this.save() }, "SAVE INTEREST"))));
    }
}
exports.default = react_router_dom_1.withRouter(react_apollo_1.compose(react_apollo_1.withApollo, react_apollo_1.graphql(Query_1.ALL_INTEREST, { name: 'interests' }), react_apollo_1.graphql(Mutation_1.ADD_INTERESTS, { name: 'addInterests' }))(InterestPage));
//# sourceMappingURL=interest.js.map