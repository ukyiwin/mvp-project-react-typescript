"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const WriteModal_1 = require("Components/WriteModal");
const ArticleList_1 = require("Components/ArticleList");
const react_router_dom_1 = require("react-router-dom");
const react_helmet_1 = require("react-helmet");
require("./style.css");
class Home extends React.Component {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        if (this.props.me) {
            /*if (this.props.me.completedProfile === 1 || completedProfile === 0){
              this.props.hostory.replace('/add/profile');
            }*/
        }
    }
    render() {
        return (React.createElement("div", { className: "uk-width-1-1" },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Home"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement(WriteModal_1.default, null),
            React.createElement("div", { className: "uk-flex" },
                React.createElement(ArticleList_1.default, null))));
    }
}
exports.default = react_router_dom_1.withRouter(Home);
//# sourceMappingURL=index.js.map