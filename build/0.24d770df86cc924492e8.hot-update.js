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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-search uk-search-default" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "", className: "uk-search-icon-flip", "data-uk-icon": "icon: search", "data-uk-search-icon": true }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: "uk-search-input", type: "search", placeholder: "Search..." }))));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBar;



/***/ })

};
//# sourceMappingURL=0.24d770df86cc924492e8.hot-update.js.map