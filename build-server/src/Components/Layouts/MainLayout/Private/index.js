"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
require("./style.css");
const ConnectBox_1 = require("Components/ConnectBox");
const TopInterest_1 = require("Components/TopInterest");
const glamorous_1 = require("glamorous");
const Label_1 = require("Components/Label");
const A = glamorous_1.default.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000'
});
const PublicLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { exact: true, render: matctProps => isAuthenticated ?
            (React.createElement("div", { className: "uk-flex uk-padding-small@s", style: { paddingTop: 10 } },
                React.createElement("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m" },
                    React.createElement("div", { className: "uk-card uk-width-1-1", style: { marginBottom: 10, padding: 0 } },
                        React.createElement(Label_1.default, { text: "Top Interests" }),
                        React.createElement(TopInterest_1.default, null)),
                    React.createElement("div", { className: "uk-card uk-card-default uk-width-1-1 uk-padding-small" },
                        React.createElement("div", null,
                            React.createElement("p", null, "Copyright @ 2018, Unizonn")),
                        React.createElement("ul", { className: "listItem uk-text-center" },
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "Terms")),
                            React.createElement("li", null,
                                React.createElement(A, { color: '#000', href: "#" }, "Privacy")),
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "About")),
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "Support"))))),
                React.createElement("div", { className: "uk-flex uk-width-expand" },
                    React.createElement(Component, Object.assign({}, matctProps))),
                React.createElement("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m", style: { marginBottom: 10 } },
                    !isAuthenticated ?
                        React.createElement("div", { className: "uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small" },
                            React.createElement("h3", { className: "uk-card-title" },
                                "Hello ",
                                props.me ? props.me.firstname : ''),
                            React.createElement("p", null, "Please signup or login to get the Unizonn experience. It will only take a few steps"),
                            React.createElement(react_router_dom_1.Link, { to: "/login", className: "uk-button uk-button-primary" }, "Login"))
                        : null,
                    React.createElement(ConnectBox_1.default, null))))
            : (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/' } })) })));
};
exports.default = react_router_dom_1.withRouter(PublicLayout);
//# sourceMappingURL=index.js.map