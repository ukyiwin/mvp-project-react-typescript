"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const glamorous_1 = require("glamorous");
require("./style.css");
// var winWidth = $(window).width();
// var winHeight = $(window).height();
/*const videoOpts = {
  height: winHeight,
  width: winWidth,
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};*/
const A = glamorous_1.default.a({
    fontFamily: 'brandon-grotesque',
    color: '#ffffff'
});
const FooterPublic = () => {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "uk-section uk-light", style: { backgroundColor: '#333333' } },
            React.createElement("div", { className: "uk-container", id: "footerText" },
                React.createElement("h3", { style: { marginBottom: 10 } }, "Unizonn"),
                React.createElement("div", { className: "uk-column-1-2@m uk-column-1-1@s" },
                    React.createElement("div", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "Articles")),
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "Forum")),
                            React.createElement("li", null,
                                React.createElement(A, { href: "#" }, "Library")))),
                    React.createElement("div", null,
                        React.createElement("p", null, "Join Unizonn now and reach out to new possibilies")),
                    React.createElement("div", null,
                        React.createElement("button", { className: "uk-button uk-button-primary" }, "Get started"))))),
        React.createElement("div", { className: "uk-flex uk-width-1-1 uk-flex-stretch\r\n        uk-section-secondary uk-light uk-padding-small\r\n        uk-padding-remove-vertical", style: { paddingTop: 15 } },
            React.createElement("div", { className: "uk-width-1-3@m uk-width-1-1@s uk-padding-small", id: "footerList" },
                React.createElement("p", null, "Copyright @2017, All Rights Reserved")),
            React.createElement("div", { className: "uk-width-2-3@m uk-width-1-1@s", id: "footerList" },
                React.createElement("ul", null,
                    React.createElement("li", null,
                        React.createElement(A, { href: "#" }, "Terms")),
                    React.createElement("li", null,
                        React.createElement(A, { href: "#" }, "Privacy")),
                    React.createElement("li", null,
                        React.createElement(A, { href: "#" }, "Jobs")),
                    React.createElement("li", null,
                        React.createElement(A, { href: "#" }, "About")),
                    React.createElement("li", null,
                        React.createElement(A, { href: "#" }, "Support")))))));
};
exports.FooterPublic = FooterPublic;
//# sourceMappingURL=index.js.map