exports.id = 0;
exports.modules = {

/***/ "./src/Components/LeftSideBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_UserProfileBox__ = __webpack_require__("./src/Components/UserProfileBox/index.tsx");







const A = __WEBPACK_IMPORTED_MODULE_5_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});
// tslint:disable-next-line:no-any
class LeftSideBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: " uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 mdc-elevation--z4 uk-card uk-card-default", style: { paddingTop: 30, marginBottom: 10 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_UserProfileBox__["a" /* default */], { me: this.props.user })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 mdc-elevation--z4 uk-card uk-card-default", style: { marginBottom: 10, padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Label__["a" /* default */], { text: "Top Interests" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_TopInterest__["a" /* default */], null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "listItem", style: { justifyContent: 'space-evenly', flex: 1 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "About")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "Terms & Terms")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { color: '#000', href: "#" }, "Privacy")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "Career")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](A, { href: "#" }, "Support"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Copyright @ 2018, Unizonn")))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(LeftSideBar)));


/***/ })

};
//# sourceMappingURL=0.1771124cda6fe46725eb.hot-update.js.map