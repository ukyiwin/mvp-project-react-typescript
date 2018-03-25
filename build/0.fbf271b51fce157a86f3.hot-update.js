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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "navbar-form", role: "search" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-group" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", className: "form-control", placeholder: "Search", name: "q" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-group-btn" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-default", type: "submit" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "glyphicon glyphicon-search" }))))));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBar;



/***/ })

};
//# sourceMappingURL=0.fbf271b51fce157a86f3.hot-update.js.map