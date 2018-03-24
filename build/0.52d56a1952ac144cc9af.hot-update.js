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
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-text-center" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { size: 70, 
            // tslint:disable-next-line:max-line-length
            url: props.me.avatar ? props.me.avatar.name : '', presence: false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-bold", style: { fontSize: 23 } },
            props.me.firstname,
            " ",
            props.me.lastname)));
};
/* harmony default export */ __webpack_exports__["a"] = (UserProfileBox);


/***/ })

};
//# sourceMappingURL=0.52d56a1952ac144cc9af.hot-update.js.map