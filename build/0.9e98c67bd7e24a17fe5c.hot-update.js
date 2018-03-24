exports.id = 0;
exports.modules = {

/***/ "./src/Components/SearchBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class SearchBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
    }
    render() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { action: "/search", acceptCharset: "UTF-8", method: "get", className: "uk-search bolder uk-form-width-large" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { name: "button", type: "submit", className: "uk-text-center" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "fa fa-search" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { onFocus: () => this.props.showDropdown(), onBlur: () => this.props.hideDropdown(), value: this.props.term, onChange: (event) => {
                    this.handleInputChange(event.target.value);
                }, placeholder: "Search on unizonn", autoComplete: "off", className: "uk-form-width-large", type: "search", name: "search[q]", id: "search_q" })));
    }
    // tslint:disable-next-line:typedef
    handleInputChange(term) {
        this.props.onSearchTermChange(term);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SearchBar;



/***/ })

};
//# sourceMappingURL=0.9e98c67bd7e24a17fe5c.hot-update.js.map