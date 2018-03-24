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



const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;
const Pink = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#FF6AC1' } }, children);
const Yellow = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#EFF59B' } }, children);
const Lightblue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#9AEDFE' } }, children);
const Green = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57EE89' } }, children);
const Blue = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#57C7FF' } }, children);
const Gray = ({ children }) => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { style: { color: '#909090' } }, children);
class HomePublic extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            strokeDashOffset: 0,
            pinPin: false,
            pinUnpin: false,
        };
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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"], { ref: (ref) => (this.parallax = ref), pages: 3 },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1, speed: 1, style: { backgroundColor: '#805E73' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2, speed: 1, style: { backgroundColor: '#87BCDE' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 0, speed: 0, factor: 3, style: { backgroundImage: url('stars', true), backgroundSize: 'cover' } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1.3, speed: -0.3, style: { pointerEvents: 'none' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('satellite4'), style: { width: '15%', marginLeft: '70%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1, speed: 0.8, style: { opacity: 0.1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '55%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '15%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1.75, speed: 0.5, style: { opacity: 0.1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '70%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '40%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1, speed: 0.2, style: { opacity: 0.2 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '10%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '75%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1.6, speed: -0.1, style: { opacity: 0.4 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '60%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '25%', marginLeft: '30%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '10%', marginLeft: '80%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2.6, speed: 0.4, style: { opacity: 0.6 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '20%', marginLeft: '5%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('cloud'), style: { display: 'block', width: '15%', marginLeft: '75%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2.5, speed: -0.4, style: { display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('earth'), style: { width: '60%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2, speed: -0.3, style: {
                    backgroundSize: '80%',
                    backgroundPosition: 'center',
                    backgroundImage: url('clients', true)
                } }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 0, speed: 0.1, onClick: () => this.parallax.scrollTo(1), style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('server'), style: { width: '20%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 1, speed: 0.1, onClick: () => this.parallax.scrollTo(2), style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('bash'), style: { width: '40%' } })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_spring__["Parallax"].Layer, { offset: 2, speed: -0, style: { display: 'flex', alignItems: 'center', justifyContent: 'center' }, onClick: () => this.parallax.scrollTo(0) },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('clients-main'), style: { width: '40%' } }))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (HomePublic);
/*
<div className="uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1">
                        <InputBoxLogin />
                    </div>
                    */ 


/***/ }),

/***/ "react-spring":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

};
//# sourceMappingURL=0.302ab2bc8b70b09579da.hot-update.js.map