exports.id = 0;
exports.modules = {

/***/ "./src/Components/PopoverLink/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);


class PopoverLink extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    // tslint:disable-next-line:typedef
    constructor(props) {
        super(props);
        this.state = {
            showPopover: false,
            user: null,
            position: null,
        };
        this.handleMouseEnter = (event) => {
            // let position = 'top';
            // const POPOVER_HEIGHT = 200;
            // tslint:disable-next-line:prefer-conditional-expression
            // if (POPOVER_HEIGHT + 30 > event.clientY) {
            // position = 'bottom';
            // } else {
            // position = 'top';
            // }
            // this.timeoutID = setTimeout(() => {
            // this.setState({ user: {}, showPopover: true, position });
            // },                          450);
        };
        this.state = { showPopover: false, user: null, position: null };
    }
    render() {
        const styleIt = this.props.bigger ? { fontSize: 17 } : {};
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "popover-link uk-text-bold", onMouseEnter: () => this.handleMouseEnter.bind(this), onMouseLeave: () => this.handleMouseLeave.bind(this) },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: `/${this.props.link}`, className: "card-title", style: styleIt }, this.props.children),
            this.renderPopover()));
    }
    renderPopover() {
        if (this.state.showPopover) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null);
        }
        else {
            return null;
        }
    }
    // tslint:disable-next-line:typedef
    handleMouseLeave(event) {
        // if (this.timeoutID) {
        // clearTimeout(this.timeoutID);
        // this.timeoutID = null;
        // }
        // setTimeout(() => { this.setState({ showPopover: false, position: null }); }, 180);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PopoverLink;



/***/ })

};
//# sourceMappingURL=0.29594a325783ecbcad66.hot-update.js.map