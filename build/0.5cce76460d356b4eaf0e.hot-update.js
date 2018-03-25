exports.id = 0;
exports.modules = {

/***/ "./src/Components/UserProfileBox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");


// tslint:disable-next-line:typedef
const UserProfileBox = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-text-center uk-padding-small" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { size: 70, 
            // tslint:disable-next-line:max-line-length
            url: props.me.avatar ? props.me.avatar.name : '', presence: false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 19 } },
            props.me.firstname,
            " ",
            props.me.lastname),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { fontSize: 13 } }, "Founder at Gueva Technologies. Geek, programmer, interest in AI and Machine Learning, Big Data, love basketball."),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "score-wrap" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-default" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "0"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Posts"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "score-wrap" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-default" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "0"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Connections")))),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "d-flex flex-row justify-content-between" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "score-wrap" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/@rexraphael" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "big" }, "0"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "small-title" }, "Posts"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "score-wrap" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "/@rexraphael/followers" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "big" }, "0"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "small-title" }, "Connections"))))));
};
/* harmony default export */ __webpack_exports__["a"] = (UserProfileBox);


/***/ })

};
//# sourceMappingURL=0.5cce76460d356b4eaf0e.hot-update.js.map