"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import UIkit from 'uikit/src/js/uikit';
const react_router_dom_1 = require("react-router-dom");
// import * as Logo from 'Assets/logo.png';
require("./style.css");
// tslint:disable-next-line:no-any
class SideBar extends React.Component {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        return (React.createElement("div", { id: "offcanvas-nav", "uk-offcanvas": "overlay: true" },
            React.createElement("div", { className: "uk-offcanvas-bar un-sidebar-container", style: { margin: 0, padding: 0, color: '#000' } },
                React.createElement("ul", { className: "uk-nav", style: { margin: 0, padding: 0, color: '#000' } },
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/home", className: "uk-light" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: home" }),
                            " Articles")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/forum" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: thumbnails" }),
                            " Forums")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/library" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: location" }),
                            " Library")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: rss" }),
                            " Connections")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: calendar" }),
                            " Calender")),
                    React.createElement("li", { className: "uk-nav-divider" }),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: thumbnails" }),
                            " Unizonn")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/support" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: question" }),
                            " Support")),
                    React.createElement("li", null,
                        React.createElement(react_router_dom_1.Link, { to: "/about" },
                            React.createElement("span", { className: "uk-margin-small-right", "uk-icon": "icon: info" }),
                            " About"))))));
    }
}
exports.default = SideBar;
//# sourceMappingURL=index.js.map