exports.id = 0;
exports.modules = {

/***/ "./src/Components/InputBoxLogin/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");




// tslint:disable-next-line:no-any
class InputBoxLogin extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
            loading: false,
        };
        this.checkUser = (e) => {
            e.preventDefault();
            this.setState({ loading: true });
            this.props.client
                .query({
                query: __WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */],
                variables: {
                    email: this.state.text,
                },
            })
                .then(({ data }) => {
                data.userExist
                    ? this.props.history.push({
                        pathname: '/login',
                        email: this.state.text,
                    })
                    : this.props.history.push({
                        pathname: '/signup',
                        email: this.state.text,
                    });
                this.setState({ loading: false });
            })
                .catch((error) => {
                this.setState({ loading: false });
            });
        };
    }
    render() {
        const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-heading-primary uk-text-bold uk-text-uppercase" }, "unizonn"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: " uk-text-center uk-margin uk-text-bold" }, "Friendly and inclusive community for students and academia"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { onSubmit: this.checkUser, className: "uk-margin uk-flex-stretch", "uk-margin": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin uk-flex uk-width-1-1", "uk-margin": true },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-form-custom": "target: true", className: "uk-width-3-4@m uk-width-1-1@s" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "email", onChange: (e) => this.setState({ text: e.target.value }), value: this.state.text, required: true, className: "uk-input uk-box-shadow-hover-small uk-responsive-width uk-form-large", placeholder: "Enter email to signin or signup" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-4@m uk-width-1-1@s" }, loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1", style: { marginLeft: 15, color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-large", type: "submit" }, "GETSTARTED"))))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */], {
    name: 'userExist',
    options: { variables: { email: '' } },
}))(InputBoxLogin)));


/***/ }),

/***/ "./src/Containers/HomePublic/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__ = __webpack_require__("./src/Components/InputBoxLogin/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss__ = __webpack_require__("./src/Containers/HomePublic/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_scss__);




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
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: url('satellite4'), style: { width: '15%', marginLeft: '70%' } }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "bg1", className: "uk-flex uk-width-1-1 uk-flex-stretch uk-height-large backgroundOne", style: { height: '100vh' } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-container-expand uk-position-center-left uk-flex uk-width-1-1" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_InputBoxLogin__["a" /* default */], null)))),
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


/***/ })

};
//# sourceMappingURL=0.1c5fcaee710d6752e56a.hot-update.js.map