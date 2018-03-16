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
const ProfileLeft_1 = require("Components/ProfileLeft");
require("./style.css");
const __1 = require("..");
const ProfileLayout = (props) => {
    const { component: Component, isAuthenticated, exact, refreshToken } = props, rest = __rest(props, ["component", "isAuthenticated", "exact", "refreshToken"]);
    return (React.createElement(__1.EmptyLayout, Object.assign({}, rest, { isAuthenticated: isAuthenticated, exact: exact !== null ? exact : true, component: matchProps => isAuthenticated ?
            (React.createElement("div", { className: "uk-width-1-1" },
                React.createElement("div", { className: "uk-cover-container uk-height-medium uk-card uk-card-default uk-background-primary" },
                    React.createElement("canvas", { width: "", height: "" }),
                    React.createElement("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "cover image", "uk-cover": "ratio: 1", className: "uk-blend-hard-darken" })),
                React.createElement("div", { className: "uk-card uk-card-default uk-padding-small" },
                    React.createElement("div", { className: "uk-text-right" },
                        React.createElement("div", { "uk-switcher": "animation: uk-animation-fade" },
                            React.createElement("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Post"),
                            React.createElement("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Connections"),
                            React.createElement("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" }, "Activity"),
                            React.createElement("button", { className: "uk-button uk-button-secondary uk-button-small" }, "Edit Profile")))),
                React.createElement("div", { className: "uk-flex uk-flex-stretch uk-width-1-1" },
                    React.createElement("div", { className: "uk-width-1-3" },
                        React.createElement(ProfileLeft_1.default, null)),
                    React.createElement("div", { className: "uk-width-2-3" },
                        React.createElement(Component, Object.assign({}, matchProps, { refreshToken: refreshToken }))))))
            : (React.createElement(react_router_dom_1.Redirect, { to: { pathname: '/' } })) })));
};
exports.default = react_router_dom_1.withRouter(ProfileLayout);
//# sourceMappingURL=index.js.map