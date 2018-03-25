exports.id = 0;
exports.modules = {

/***/ "./src/Containers/ComposeArticle/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Editor2__ = __webpack_require__("./src/Components/Editor2/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select_plus__ = __webpack_require__("react-select-plus");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_select_plus___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_select_plus__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css__ = __webpack_require__("./node_modules/react-select-plus/dist/react-select-plus.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_select_plus_dist_react_select_plus_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/ComposeArticle/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);

// import Editor from 'Components/Editor';







class ComposeWrite extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            title: null,
            body: null,
            category: [],
            removeSelected: true,
            value: [],
        };
        this.handleChange = (value) => {
            this.setState({ value });
            // console.log(`Selected: ${selectedOption.label}`);
        };
    }
    addInterestContent() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["d" /* ALL_INTEREST */],
        })
            .then((result) => {
            // tslint:disable-next-line:no-any
            const tempList = [];
            result.data.allInterest.map((interest) => {
                const temp = { value: interest.id, label: interest.name };
                tempList.push(temp);
            });
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ category: tempList });
        });
    }
    componentDidMount() {
        this.addInterestContent();
    }
    render() {
        const { value, category, title } = this.state;
        // tslint:disable-next-line:no-console
        console.log(title);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-flex uk-margin-small-bottom" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-width-1-2", type: "button" }, "Go Back"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-width-1-2", type: "button" }, "Publish")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-padding-large" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s uk-padding-small uk-padding-remove-vertical" }, !this.props.allInterest.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_select_plus___default.a, { name: "form-field-name", value: value, onChange: this.handleChange, placeholder: "Add categories or interest", multi: true, closeOnSelect: true, removeSelected: this.state.removeSelected, simpleValue: false, options: category })) : null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large" }, "Title of Article"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding-large", style: { minHeight: '60vh' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Editor2__["a" /* default */], null)))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["d" /* ALL_INTEREST */], {
    name: 'allInterest',
}))(ComposeWrite)));


/***/ })

};
//# sourceMappingURL=0.c30c04abe0b351c3b1d7.hot-update.js.map