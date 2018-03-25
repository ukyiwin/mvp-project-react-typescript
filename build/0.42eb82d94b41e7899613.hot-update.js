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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__ = __webpack_require__("./src/Components/RightSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__ = __webpack_require__("./src/Components/LeftSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
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
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: true, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "columns uk-flex uk-padding-large@s uk-padding" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column col-5 uk-margin-left uk-visible@m" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__["a" /* default */], { user: props.me })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column col-12 uk-width-expand" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "column col-7 uk-margin-right uk-visible@m", style: { marginBottom: 10 } },
                    isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small", style: { marginBottom: 10 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-card-title" }, "Hello"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Please signup or login to get the Unizonn experience. It will only take a few steps"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary" }, "Login"))) : null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__["a" /* default */], null))))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(PrivateLayout));


/***/ })

};
//# sourceMappingURL=0.42eb82d94b41e7899613.hot-update.js.map