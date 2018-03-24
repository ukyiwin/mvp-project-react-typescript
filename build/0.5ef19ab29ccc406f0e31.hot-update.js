exports.id = 0;
exports.modules = {

/***/ "./src/Components/Avatar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

// tslint:disable-next-line:typedef
const Avatar = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("figure", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: `uk-border-${props.square ? 'square' : 'circle'}
                  uk-animation-kenburns uk-animation-fast`, src: props.url, width: props.size, height: props.size, alt: "img", 
            // tslint:disable-next-line:max-line-length
            style: { borderRadius: 60, borderImageWidth: 5, height: props.size + 1, width: props.size + 1, borderColor: 'green',
                backgroundColor: '#000' } }),
        props.presence ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("i", { className: "avatar-presence online" }) : null));
};
/* harmony default export */ __webpack_exports__["a"] = (Avatar);


/***/ })

};
//# sourceMappingURL=0.5ef19ab29ccc406f0e31.hot-update.js.map