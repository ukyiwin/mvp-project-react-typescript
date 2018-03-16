"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Avatar_1 = require("Components/Avatar");
const react_router_dom_1 = require("react-router-dom");
// tslint:disable-next-line:no-any
class WriteModal extends React.PureComponent {
    render() {
        return (React.createElement("div", { className: "uk-card uk-card-small uk-card-default uk-width-1-1 uk-margin-bottom", style: { borderRadius: 1, padding: 0, paddingTop: 15, marginLeft: 0, marginRight: 0 } },
            React.createElement("div", { className: "uk-flex uk-text-middle uk-padding-small" },
                React.createElement(Avatar_1.default, { url: "https://getuikit.com/docs/images/avatar.jpg", presence: false, size: 40 }),
                React.createElement(react_router_dom_1.Link, { to: "/write" },
                    React.createElement("div", { "data-uk-toggle": "target: #modal-close-default", className: "uk-text-center", style: { paddingLeft: 10 } },
                        React.createElement("p", { className: "uk-text-lead uk-text-center" }, "Write an article..."))),
                React.createElement("div", { className: "uk-align-right pull-right" },
                    React.createElement("button", { className: "uk-button" }, "Photo"),
                    React.createElement("button", { className: "uk-button" }, "Video")))));
    }
}
exports.default = WriteModal;
//# sourceMappingURL=index.js.map