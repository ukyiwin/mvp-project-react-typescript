exports.id = 0;
exports.modules = {

/***/ "./src/Components/PersonItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__ = __webpack_require__("./src/Components/FollowButton/index.tsx");



// tslint:disable-next-line:typedef
const PersonItem = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile tile-centered px-2" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-icon" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { url: props.url, size: 40, presence: false })),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-content" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-title" }, props.name),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-subtitle text-gray" }, "I like to eat alot everyday with")),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tile-action" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__["a" /* default */], { liked: true }))));
};
/* harmony default export */ __webpack_exports__["a"] = (PersonItem);


/***/ })

};
//# sourceMappingURL=0.b810246b60ec5fd374f8.hot-update.js.map