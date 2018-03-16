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
const PublicLayout = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken } = props, rest = __rest(props, ["component", "isAuthenticated", "exact", "refreshToken"]);
    return (React.createElement(react_router_dom_1.Route, Object.assign({}, rest, { exact: exact !== null ? exact : true, render: matchProps => isAuthenticated !== true ?
            (React.createElement(React.Fragment, null,
                React.createElement(Component, Object.assign({}, matchProps, { refreshToken: refreshToken }))))
            : (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/home' } })) })));
};
exports.default = react_router_dom_1.withRouter(PublicLayout);
//# sourceMappingURL=index.js.map