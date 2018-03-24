exports.id = 0;
exports.modules = {

/***/ "./src/Components/Layouts/MainLayout/Private/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Private/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__ = __webpack_require__("./src/Components/ConnectBox/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};







const A = __WEBPACK_IMPORTED_MODULE_5_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});
const PrivateLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: true, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-padding-large@s uk-padding" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-width-1-1", style: { marginBottom: 10, padding: 0 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Label__["a" /* default */], { text: "Top Interests" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__["a" /* default */], null)),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-width-1-1 uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Copyright @ 2018, Unizonn")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "listItem uk-text-center" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "Terms")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { color: '#000', href: "#" }, "Privacy")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "About")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "Support"))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-width-expand" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m", style: { marginBottom: 10 } },
                !isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-card-title" },
                        "Hello ",
                        props.me ? props.me.firstname : ''),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Please signup or login to get the Unizonn experience. It will only take a few steps"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary" }, "Login"))) : null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__["a" /* default */], null)))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(PrivateLayout));


/***/ })

};
//# sourceMappingURL=0.c0dc938fe2101baddf25.hot-update.js.map