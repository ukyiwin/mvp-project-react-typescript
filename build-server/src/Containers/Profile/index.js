"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
require("./style.css");
class Profile extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (React.createElement("div", { className: "uk-flex uk-height-1-1 uk-height-match" },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | My Profile"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            "dhjdhjh"));
    }
}
exports.default = Profile;
//# sourceMappingURL=index.js.map