exports.id = 0;
exports.modules = {

/***/ "./src/Assets/bg9.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/bg9.03a16ec6.svg";

/***/ }),

/***/ "./src/Containers/HomePublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Containers/HomePublic/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);



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

/***/ "./src/Containers/HomePublic/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat+Alternates:700|Volkhov:700|Hammersmith+One|Arbutus+Slab|Poppins:800|Questrial|Bungee+Outline|Josefin+Sans:700);", ""]);

// module
exports.push([module.i, "article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {\n  display: block; }\n\naudio, canvas, video {\n  display: inline-block; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden] {\n  display: none; }\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\na:focus {\n  outline: thin dotted; }\n\na:active, a:hover {\n  outline: 0; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb, strong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nhr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\ncode, kbd, pre, samp {\n  font-family: monospace,serif;\n  font-size: 1em; }\n\npre {\n  white-space: pre-wrap; }\n\nq {\n  quotes: \"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\"; }\n\nsmall {\n  font-size: 80%; }\n\nsub, sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 0; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\nbutton, input, select, textarea {\n  font-family: inherit;\n  font-size: 100%;\n  margin: 0; }\n\nbutton, input {\n  line-height: normal; }\n\nbutton, select {\n  text-transform: none; }\n\nbutton, html input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled], html input[disabled] {\n  cursor: default; }\n\ninput[type=\"checkbox\"], input[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button, input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nbutton::-moz-focus-inner, input::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto;\n  vertical-align: top; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Franklin Gothic Medium\", \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\nsection {\n  text-align: center;\n  overflow: hidden; }\n\np, a {\n  font-family: \"freight-text-pro\",sans-serif;\n  font-size: 1em;\n  font-style: normal;\n  font-weight: 500;\n  letter-spacing: 1px;\n  line-height: 1.25em;\n  margin-bottom: 0; }\n\n.fp-tableCell {\n  display: table-cell;\n  vertical-align: middle;\n  width: 100%;\n  height: 100%; }\n\n.btn-main {\n  border-radius: 4;\n  background-color: #ffffff;\n  border: 1px solid #ced4da;\n  font-size: 16;\n  padding: '10px 12px';\n  width: calc(100% - 24px);\n  display: 'flex';\n  flex-wrap: 'wrap'; }\n\n.backgroundOne {\n  background: url(" + __webpack_require__("./src/Assets/bg8.svg") + "), url(" + __webpack_require__("./src/Assets/bg4.svg") + "), url(" + __webpack_require__("./src/Assets/bg2.svg") + ") 40px;\n  background-position: right bottom, right top, bottom right;\n  background-repeat: no-repeat, no-repeat, repeat-x;\n  background-size: auto, auto, 60%; }\n\n.backgroundTwo {\n  background: url(" + __webpack_require__("./src/Assets/bg9.svg") + ");\n  background-position: bottom center;\n  background-repeat: repeat-x;\n  background-position-y: 250px;\n  background-size: 50%; }\n\n  .container > div > div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  \n  .text {\n    pointer-events: none;\n    justify-content: start !important;\n    font-family: 'Kanit', sans-serif;\n    line-height: 0px;\n    text-transform: uppercase;\n  }\n  \n  .number {\n    font-size: 450px;\n    color: #373c4c;\n  }\n  \n  .number span {\n    display: inline-block;\n    position: relative;\n    transform: translate3d(-35%, 0, 0);\n  }\n  \n  .header {\n    margin-left: 350px;\n    font-size: 70px;\n    color: white;\n  }\n  \n  .stripe {\n    height: 2px;\n    width: auto;\n  }\n  \n  .slopeBegin {\n    background-color: #20232f;\n    clip-path: polygon(20vw 0, 70% 0, calc(70% - 20vw) 100%, 0 100%);\n  }\n  \n  .slopeEnd {\n    clip-path: polygon(70% 0, 100% 0, calc(100% - 20vw) 100%, calc(70% - 20vw) 100%);\n  }\n  \n  .slopeBegin,\n  .slopeEnd {\n    position: absolute;\n    width: 140%;\n    height: 100%;\n    cursor: pointer;\n  }\n  \n  .pink {\n    background: linear-gradient(to right, deeppink 0%, coral 100%);\n  }\n  \n  .teal {\n    background: linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%);\n  }\n  \n  .tomato {\n    background: linear-gradient(to right, tomato 0%, gold 100%);\n  }", ""]);

// exports


/***/ }),

/***/ "./src/Containers/HomePublic/style.scss":
false

};
//# sourceMappingURL=0.7f8ae1a4c915d6129f3c.hot-update.js.map