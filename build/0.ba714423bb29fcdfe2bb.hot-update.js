exports.id = 0;
exports.modules = {

/***/ "./src/Components/ConnectBox/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__ = __webpack_require__("./src/Components/PersonItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");







const ConnectBox = Object(__WEBPACK_IMPORTED_MODULE_1_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (ConnectBox(({ loading, articles, error, refetch }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], { refresh: refetch });
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card person" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Label__["a" /* default */], { text: "Suggested Connection" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_infinite_scroller___default.a, { pageStart: 0, hasMore: false }, articles.map((article, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id, className: "box" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_PersonItem__["a" /* default */]
            // tslint:disable-next-line:max-line-length
            , { 
                // tslint:disable-next-line:max-line-length
                url: 
                // tslint:disable-next-line:max-line-length
                'data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGNpcmNsZSBzdHlsZT0iZmlsbDojNzFFMkVGOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMjU2Ii8+CjxwYXRoIHN0eWxlPSJmaWxsOiMzOEM2RDk7IiBkPSJNMjI1LjcyNiw0MzkuNTQ2bDY5LjQ2OCw2OS40NjhDNDE3Ljk3NSw0OTAuMTUxLDUxMiwzODQuMDU3LDUxMiwyNTYgIGMwLTAuNjgxLTAuMDIxLTEuMzU4LTAuMDI2LTIuMDM4TDM1OC44NiwxMDAuODQ4TDIyNS43MjYsNDM5LjU0NnoiLz4KPHJlY3QgeD0iMjEzLjMzMyIgeT0iMjkyLjIxOSIgc3R5bGU9ImZpbGw6I0ZDRDA4ODsiIHdpZHRoPSI4NS4zMzMiIGhlaWdodD0iODUuMzMzIi8+CjxyZWN0IHg9IjI1Ni4yOTMiIHk9IjI5Mi4yMTkiIHN0eWxlPSJmaWxsOiNEREFCNjI7IiB3aWR0aD0iNDIuMzc5IiBoZWlnaHQ9Ijg1LjMzMyIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRDlFREVDOyIgZD0iTTM1Ny43NjQsMzYwLjVsLTQ1LjIyLTkuMDQ0bC03Ljk5Mi0xMS42NjZjLTEuNDk2LTIuMTg0LTQuMzI3LTMuMDA3LTYuNzU5LTEuOTY1TDI1NiwzNTUuODMgIGwtNDEuNTQzLTE3Ljk4N2MtMi40MTUtMS4wNTMtNS4yMzktMC4yNjItNi43NTQsMS44OTNsLTguMjQ3LDExLjcxOWwtNDUuMjIsOS4wNDRjLTIzLjAyNCw0LjYwNi0zOS41OTYsMjQuODIxLTM5LjU5Niw0OC4zdjYwLjY0NyAgQzE1NS4xNDgsNDk2LjMyOCwyMDMuNzQsNTEyLDI1Niw1MTJzMTAwLjg1Mi0xNS42NzIsMTQxLjM2LTQyLjU1NXYtNjAuNjQ3QzM5Ny4zNiwzODUuMzE5LDM4MC43ODcsMzY1LjEwNCwzNTcuNzY0LDM2MC41eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojQzdEOEQ3OyIgZD0iTTM5Ny4zNiw0MDguNzk4YzAtMjMuNDgtMTYuNTc0LTQzLjY5Ni0zOS41OTYtNDguM2wtNDUuMjItOS4wNDRsLTcuOTkyLTExLjY2NiAgYy0xLjQ5Ni0yLjE4NC00LjMyNy0zLjAwNy02Ljc1OS0xLjk2NWwtNDEuNTAzLDE3Ljg4djE1Ni4yODljNTIuMTQ4LTAuMDU3LDEwMC42MzgtMTUuNzE3LDE0MS4wNzItNDIuNTQ5di02MC42NDVIMzk3LjM2eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRkZFREI1OyIgZD0iTTM0Ny41MzEsMjA1LjQ0YzAuNDU5LTQuMjQ0LDAuNjk4LTguNDI4LDAuNjk4LTEyLjUwOWMwLTUzLjk3NC00MS4yOTMtOTcuNzI4LTkyLjIyOS05Ny43MjggIHMtOTIuMjI5LDQzLjc1My05Mi4yMjksOTcuNzI4YzAsNC4wOCwwLjI0LDguMjY0LDAuNjk4LDEyLjUwOWMtOC45NDUsMi4zMjYtMTMuMjAyLDE2LjA4Ny05LjUwNiwzMC44MTcgIGMzLjcwOCwxNC43NzYsMTQuMDE0LDI0LjkyMSwyMy4wMTgsMjIuNjYxYzAuODIxLTAuMjA1LDEuNTg2LTAuNTM4LDIuMzI2LTAuOTI3YzE2LjY2NywzMy40NTIsNDQuMzUxLDYwLjU5NCw3NS42OTMsNjAuNTk0ICBzNTkuMDI3LTI3LjEzOSw3NS42OTMtNjAuNTk0YzAuNzQsMC4zOSwxLjUwNSwwLjcyMiwyLjMyNiwwLjkyN2M5LjAwNCwyLjI2LDE5LjMwOS03Ljg4NSwyMy4wMTgtMjIuNjYxICBDMzYwLjczMiwyMjEuNTI3LDM1Ni40NzYsMjA3Ljc2MywzNDcuNTMxLDIwNS40NHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6I0U4Q0Y4OTsiIGQ9Ik0zNDcuNTMxLDIwNS40NGMwLjQ1OS00LjI0NCwwLjY5OC04LjQyOCwwLjY5OC0xMi41MDljMC01My44NzItNDEuMTM4LTk3LjU1Ni05MS45NDEtOTcuNzIxdjIyMy4zNjUgIGMzMS4yMjMtMC4xNjcsNTguNzktMjcuMjM2LDc1LjQwNS02MC41ODVjMC43NCwwLjM5LDEuNTA1LDAuNzIyLDIuMzI2LDAuOTI3YzkuMDA0LDIuMjYsMTkuMzA5LTcuODg1LDIzLjAxOC0yMi42NjEgIEMzNjAuNzMyLDIyMS41MjcsMzU2LjQ3NiwyMDcuNzYzLDM0Ny41MzEsMjA1LjQ0eiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTIwNC4xNCwxNzAuNjY3YzAsMCw0MC4wODEsMzguMzU3LDEyMS45NjYsMjQuNTY2YzAsMCw3Ljk0LTEuOTk4LDIxLjQyNSwxMC4yMDcgIGMwLDAsMjQuNjkxLTUxLjU4MSwxMS4zMzEtMTA0LjU5MWMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtMTkuMzk0LTEyLjA2Ny03MS4xMTEtMjQuOTk3LTgyLjc0NywxMS4yMDUgIGMwLDAtMzcuNDk1LTQuNzQxLTQ3LjgzOCwzNC4wNDdjLTEwLjM0MywzOC43ODgtMC44ODMsNjUuODAzLTAuODgzLDY1LjgwM1MxODMuODg0LDE1OC41OTksMjA0LjE0LDE3MC42Njd6Ii8+CjxnPgoJPHBhdGggc3R5bGU9ImZpbGw6IzMzMzMzMzsiIGQ9Ik0zNTguODYsMTAwLjg0OGMwLDAtNDMuNTI5LDUuNjAzLTYyLjkyMy02LjQ2NWMtOC44MDktNS40ODItMjQuMjg4LTExLjEyNC0zOS42NS0xMi4yNzZ2MTEyLjUwOSAgIGMxOC4zNTgsMy45MjcsNDEuNjA1LDUuMzY4LDY5LjgxOCwwLjYxNWMwLDAsNy45NC0xLjk5OCwyMS40MjUsMTAuMjA3QzM0Ny41MzEsMjA1LjQ0LDM3Mi4yMjEsMTUzLjg1OSwzNTguODYsMTAwLjg0OHoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiMzMzMzMzM7IiBkPSJNMjY3LjkxLDUxMS42OTdjMzAuNDg0LTEuMzk4LDU5LjU2NC04LjEzNSw4Ni4zNTQtMTkuMjg3VjM1OS44bC0zNC45MDctNi45ODJMMjY3LjkxLDUxMS42OTd6Ii8+CjwvZz4KPGc+Cgk8cGF0aCBzdHlsZT0iZmlsbDojNDk0OTQ4OyIgZD0iTTI0NC4wOSw1MTEuNjk3Yy0zMC40ODQtMS4zOTgtNTkuNTY0LTguMTM1LTg2LjM1NC0xOS4yODdWMzU5LjhsMzQuOTA3LTYuOTgyTDI0NC4wOSw1MTEuNjk3eiIvPgoJPHBhdGggc3R5bGU9ImZpbGw6IzQ5NDk0ODsiIGQ9Ik0yOTAuMjQ1LDM1NS45MjRsLTI0LjA2MSw4LjgxNGMtMC4zOTgtMS4yNDUtMS41NTItMi4xNTEtMi45MjktMi4xNTFoLTEzLjY0OCAgIGMtMS4zNywwLTIuNTIsMC45LTIuOTI0LDIuMTM2bC0yNC4wMTctOC43OTljLTQuMTYtMS41MjQtOC41NjYsMS41NTUtOC41NjYsNS45ODV2MzAuMzk2YzAsNC40MjksNC40MDYsNy41MDksOC41NjYsNS45ODUgICBsMjQuMDE3LTguNzk5YzAuNDAzLDEuMjM2LDEuNTUyLDIuMTM2LDIuOTI0LDIuMTM2aDEzLjY0OGMxLjM3NywwLDIuNTI5LTAuOTA3LDIuOTI5LTIuMTUxbDI0LjA2MSw4LjgxNCAgIGM0LjE2LDEuNTI0LDguNTY2LTEuNTU1LDguNTY2LTUuOTg1VjM2MS45MUMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPC9nPgo8cGF0aCBzdHlsZT0iZmlsbDojMzMzMzMzOyIgZD0iTTI5MC4yNDUsMzU1LjkyNGwtMjQuMDYxLDguODE0Yy0wLjM5OC0xLjI0NS0xLjU1Mi0yLjE1MS0yLjkyOS0yLjE1MWgtNi45Njh2MjkuMDQxaDYuOTY4ICBjMS4zNzcsMCwyLjUyOS0wLjkwNywyLjkyOS0yLjE1MWwyNC4wNjEsOC44MTRjNC4xNiwxLjUyNCw4LjU2Ni0xLjU1NSw4LjU2Ni01Ljk4NVYzNjEuOTEgIEMyOTguODExLDM1Ny40NzksMjk0LjQwNSwzNTQuNDAxLDI5MC4yNDUsMzU1LjkyNHoiLz4KPGc+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDEwLjI5IiByPSI0LjMxIi8+Cgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNBREFEQUQ7IiBjeD0iMjU2IiBjeT0iNDMzLjEzMSIgcj0iNC4zMSIvPgoJPGNpcmNsZSBzdHlsZT0iZmlsbDojQURBREFEOyIgY3g9IjI1NiIgY3k9IjQ1NS45NzMiIHI9IjQuMzEiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K', name: `${article.author.firstname} ${article.author.lastname}` })))))));
}));


/***/ }),

/***/ "./src/Components/Layouts/MainLayout/Private/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css__ = __webpack_require__("./src/Components/Layouts/MainLayout/Private/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__ = __webpack_require__("./src/Components/RightSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__ = __webpack_require__("./src/Components/LeftSideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous__ = __webpack_require__("glamorous");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_glamorous___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_glamorous__);
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};






const A = __WEBPACK_IMPORTED_MODULE_5_glamorous___default.a.a({
    fontFamily: 'brandon-grotesque',
    color: '#000000',
});
const PrivateLayout = (props) => {
    const { component: Component, isAuthenticated } = props, rest = __rest(props, ["component", "isAuthenticated"]);
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], Object.assign({}, rest, { exact: true, render: (matctProps) => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-padding-large@s uk-padding" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_LeftSideBar__["a" /* default */], { user: props.me })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-width-expand" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](Component, Object.assign({}, matctProps))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-margin-right uk-margin-left uk-visible@m", style: { marginBottom: 10 } },
                isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-card-body uk-width-1-1 uk-padding-small", style: { marginBottom: 10 } },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-card-title" }, "Hello"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Please signup or login to get the Unizonn experience. It will only take a few steps"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { to: "/login", className: "uk-button uk-button-primary" }, "Login"))) : null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_RightSideBar__["a" /* default */], null)))) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: { pathname: '/' } })) })));
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(PrivateLayout));


/***/ }),

/***/ "./src/Components/PersonItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");


// tslint:disable-next-line:typedef
const PersonItem = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex boxit" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { url: props.url, size: 40, presence: false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "", style: { marginLeft: 10 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, props.name),
            " ",
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "I like to eat alot everyday with"))));
};
/* harmony default export */ __webpack_exports__["a"] = (PersonItem);


/***/ }),

/***/ "./src/Components/RightSideBar/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__ = __webpack_require__("./src/Components/ConnectBox/index.tsx");




// tslint:disable-next-line:no-any
class LeftSideBar extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    render() {
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: " uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 mdc-elevation--z4 uk-card uk-card-default", style: { marginBottom: 10, padding: 0 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_ConnectBox__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(LeftSideBar)));


/***/ })

};
//# sourceMappingURL=0.ba714423bb29fcdfe2bb.hot-update.js.map