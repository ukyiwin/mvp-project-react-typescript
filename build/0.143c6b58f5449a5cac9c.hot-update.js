exports.id = 0;
exports.modules = {

/***/ "./src/Components/TopInterest/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__ = __webpack_require__("./src/Components/InterestItemSlim/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");





const TopInterest = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["d" /* ALL_INTEREST */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (TopInterest(({ loading, allInterest, error }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tags-wrapper uk-padding-small undefined" }, allInterest.map((interest, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__["a" /* default */], { key: interest.id, url: interest.avatar, name: interest.name })))));
}));


/***/ })

};
//# sourceMappingURL=0.143c6b58f5449a5cac9c.hot-update.js.map