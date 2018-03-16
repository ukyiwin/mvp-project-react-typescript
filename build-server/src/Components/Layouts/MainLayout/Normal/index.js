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
// import { FooterPublic } from 'Components/Layouts/FooterPublic';
require("./style.css");
const EmptyLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { exact: true, render: matctProps => isAuthenticated ?
            (React.createElement("div", { className: "uk-flex uk-height-1-1 " },
                React.createElement("div", { className: "uk-width-expand  uk-height-1-1 " },
                    React.createElement(Component, Object.assign({}, matctProps)))))
            : (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/' } })) })));
};
exports.default = react_router_dom_1.withRouter(EmptyLayout);
//# sourceMappingURL=index.js.map