exports.id = 0;
exports.modules = {

/***/ "./src/Components/SearchBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__("./src/Components/SearchBar/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);


class SearchBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { id: "search-form_3" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "search_3" }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "submit", className: "submit_3", value: "Search" })));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBar;



/***/ }),

/***/ "./src/Components/SearchBar/style.scss":
/***/ (function(module, exports) {



/***/ })

};
//# sourceMappingURL=0.a2f07b69135186f1289f.hot-update.js.map