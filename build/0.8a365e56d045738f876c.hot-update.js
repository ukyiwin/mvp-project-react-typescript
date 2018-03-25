exports.id = 0;
exports.modules = {

/***/ "./src/Components/InputBoxLogin/index.tsx":
false,

/***/ "./src/Containers/HomePublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss__ = __webpack_require__("./src/Containers/HomePublic/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_scss__);


// import InputBoxLogin from 'Components/InputBoxLogin';

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#FF6AC1' } }, children);
const Yellow = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#EFF59B' } }, children);
const Lightblue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#9AEDFE' } }, children);
const Green = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57EE89' } }, children);
const Blue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57C7FF' } }, children);
const Gray = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#909090' } }, children);
const Page = ({ offset, caption, first, second, gradient, onClick }) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_0_react__["Fragment"], null,
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: offset, speed: 0.2, onClick: onClick },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "slopeBegin" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: offset, speed: -0.2, onClick: onClick },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `slopeEnd ${gradient}` })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { className: "text number", offset: offset, speed: 0.3 },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
            "0",
            offset + 1)),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { className: "text header", offset: offset, speed: 0.4 },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { fontSize: 20 } }, caption),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: `stripe ${gradient}` }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, first),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, second)))));
class HomePublic extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            strokeDashOffset: 0,
            pinPin: false,
            pinUnpin: false,
        };
        this.scroll = (to) => this.refs.parallax.scrollTo(to);
    }
    componentWillMount() {
        // dhsj
    }
    componentDidMount() {
        // kjk
    }
    componentWillUnmount() {
        // hjh
    }
    render() {
        // const { classes } = this.props;
        return (
        // tslint:disable-next-line:jsx-no-string-ref
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"], { className: "container", ref: "parallax", pages: 3, horizontal: true, scrolling: false },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Page, { offset: 0, gradient: "pink", caption: "who we are", first: "Lorem ipsum", second: "dolor sit", onClick: () => this.scroll(1) }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Page, { offset: 1, gradient: "teal", caption: "what we do", first: "consectetur", second: "adipiscing elit", onClick: () => this.scroll(2) }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Page, { offset: 2, gradient: "tomato", caption: "what we want", first: "Morbi quis", second: "est dignissim", onClick: () => this.scroll(0) })));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (HomePublic);


/***/ }),

/***/ "react-spring":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

};
//# sourceMappingURL=0.8a365e56d045738f876c.hot-update.js.map