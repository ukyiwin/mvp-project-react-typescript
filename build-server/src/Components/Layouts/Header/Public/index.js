"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import UIkit from 'uikit/src/js/uikit';
const react_router_dom_1 = require("react-router-dom");
// tslint:disable-next-line:no-any
class PublicHeader extends React.Component {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        return (React.createElement("div", { "data-uk-sticky": "animation: uk-animation-slide-top; \r\n        sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky: \r\n        cls-inactive: uk-navbar-transparent; top: 100;" },
            React.createElement("nav", { className: "uk-navbar-container uk-margin uk-background-secondary", "uk-navbar": true, style: { zIndex: 980, elevation: 1 } },
                React.createElement("div", { className: "uk-navbar-left" },
                    React.createElement("button", { className: "uk-navbar-toggle uk-hidden@m", type: "button", "uk-navbar-toggle-icon": true, "uk-toggle": "target: #offcanvas-nav", "uk-icon": "icon: menu; ratio: 1.5" }),
                    React.createElement("a", { className: "uk-navbar-item uk-logo", href: "#" },
                        React.createElement("img", { src: "https://getuikit.com/docs/images/avatar.jpg", alt: "Logo", width: "40", height: "40" }),
                        "  Unizonn"),
                    React.createElement("ul", { className: "uk-navbar-nav uk-visible@m" },
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/home", className: "uk-light" }, "Articles")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/home", className: "uk-light" }, "Stories")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/forum", className: "uk-light" }, "Forums")),
                        React.createElement("li", null,
                            React.createElement(react_router_dom_1.Link, { to: "/library", className: "uk-light" }, "Library"))),
                    React.createElement("div", { className: "uk-navbar-right uk-visible@s" },
                        React.createElement("ul", { className: "uk-iconnav" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", "uk-icon": "icon: calendar; ratio: 1.5" })),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", "uk-icon": "icon: mail; ratio: 1.5" })),
                            React.createElement("li", null,
                                React.createElement("a", { href: "#", "uk-icon": "icon: bell; ratio: 1.5" }))),
                        React.createElement("ul", { className: "uk-navbar-nav" },
                            React.createElement("li", null,
                                React.createElement("a", { href: "#" },
                                    React.createElement("img", { className: "uk-border-circle", src: "https://getuikit.com/docs/images/avatar.jpg", width: "40", height: "40", alt: "Border circle" })),
                                React.createElement("div", { className: "uk-navbar-dropdown" },
                                    React.createElement("ul", { className: "uk-nav uk-navbar-dropdown-nav" },
                                        React.createElement("li", { className: "uk-active" },
                                            React.createElement("a", { href: "#" }, "Active")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Item")),
                                        React.createElement("li", { className: "uk-nav-header" }, "Header"),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Item")),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Item")),
                                        React.createElement("li", { className: "uk-nav-divider" }),
                                        React.createElement("li", null,
                                            React.createElement("a", { href: "#" }, "Item")))))),
                        React.createElement("div", { className: "uk-navbar-nav uk-padding-small" },
                            React.createElement(react_router_dom_1.Link, { to: "/ask", className: "uk-button uk-button-primary uk-button-small" }, "Ask question")),
                        React.createElement("div", { className: "uk-navbar-nav uk-padding-small" },
                            React.createElement(react_router_dom_1.Link, { to: "/login", className: "uk-button uk-button-default uk-button-small" }, "Login / Register"))),
                    React.createElement("div", { className: "uk-navbar-right uk-hidden@s" },
                        React.createElement("div", { className: "uk-navbar-nav uk-padding-small" },
                            React.createElement("button", { className: "uk-button uk-button-primary uk-button-small" }, "Ask")),
                        React.createElement("div", { className: "uk-navbar-nav uk-padding-small" },
                            React.createElement("button", { className: "uk-button uk-button-default uk-button-small uk-border-rounded" }, "Login")))))));
    }
}
exports.default = PublicHeader;
//# sourceMappingURL=index.js.map