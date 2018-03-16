"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_helmet_1 = require("react-helmet");
require("./style.css");
class Messages extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            messages: [],
            is_typing: false
        };
    }
    render() {
        return (React.createElement("div", { className: "container" },
            React.createElement(react_helmet_1.Helmet, null,
                React.createElement("title", null, "Unizonn | Chat"),
                React.createElement("meta", { name: "an inclusive community", content: "Unizonn community" })),
            React.createElement("div", { className: "app-wrapper" },
                React.createElement("div", { className: "uk-flex uk-height-1-1 uk-height-match" },
                    React.createElement("div", { className: "uk-width-1-3 uk-height-1-1" }, "hjhjh"),
                    React.createElement("div", { className: "uk-width-2-3 uk-height-1-1" },
                        React.createElement("div", { className: "uk-padding-large" },
                            "hjhjhjh",
                            React.createElement("div", { className: "" }, "jjhjhj")))))));
    }
}
exports.default = Messages;
//# sourceMappingURL=index.js.map