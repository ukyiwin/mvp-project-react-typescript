exports.id = 0;
exports.modules = {

/***/ "./src/Components/ArticleList/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__ = __webpack_require__("react-infinite-scroller");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader__ = __webpack_require__("react-content-loader");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_content_loader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_content_loader__);







// const MyFacebookLoader = () => <Facebook />;
const MyLoader = () => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_react_content_loader___default.a, { height: 200, width: 400, speed: 2, primaryColor: '#f3f3f3', secondaryColor: '#ecebeb' },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "15", rx: "4", ry: "4", width: "117", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "70", y: "35", rx: "3", ry: "3", width: "85", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1", y: "136", rx: "3", ry: "3", width: "350", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-1", y: "118", rx: "3", ry: "3", width: "380", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "0", y: "150", rx: "3", ry: "3", width: "201", height: "6.4" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("circle", { cx: "30", cy: "30", r: "30" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "-0.5", y: "70.27", rx: "0", ry: "0", width: "348", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "1.5", y: "89.27", rx: "0", ry: "0", width: "217", height: "12" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "2.5", y: "175", rx: "0", ry: "0", width: "61", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "72.5", y: "175", rx: "0", ry: "0", width: "55", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "136.5", y: "175.27", rx: "0", ry: "0", width: "56", height: "18" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "358.5", y: "177.27", rx: "0", ry: "0", width: "25", height: "16" }),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("rect", { x: "325.5", y: "177.27", rx: "0", ry: "0", width: "23", height: "16" })));
const ArticleList = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["e" /* ARTICLES */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (ArticleList(({ loading, articles, error }) => {
    // tslint:disable-next-line:jsx-wrap-multiline
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_infinite_scroller___default.a, { pageStart: 0, hasMore: true || false, loader: __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](MyLoader, null)) }, articles.map((article) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: article.id },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_ArticleItem__["a" /* default */], { article: article }))))));
}));


/***/ }),

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

/***/ "./src/Components/ProfileLeft/index.tsx":
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
class ProfileLeft extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
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
        // const { loading } = this.state;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null,
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-default uk-width-1-1" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Rex Raphael"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "21 Connections"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Xfullstack Engineer, Dev Ops Manager, with great love for javascript and nodejs"))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["h" /* USER_EXIST */], {
    name: 'user',
    options: { variables: { email: '' } },
}))(ProfileLeft)));


/***/ }),

/***/ "./src/Components/TopInterest/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__ = __webpack_require__("./src/Components/InterestItemSlim/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__ = __webpack_require__("./src/Components/EmptyStates/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");





const TopInterest = Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["d" /* ALL_INTEREST */], {
    props: ({ data }) => (Object.assign({}, data)),
});
/* harmony default export */ __webpack_exports__["a"] = (TopInterest(({ loading, allInterest, error }) => {
    if (loading) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["b" /* LoadingComponent */], null);
    }
    if (error) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_EmptyStates__["a" /* ErrorComponent */], null);
    }
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "tags-wrapper undefined" }, allInterest.map((interest, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_InterestItemSlim__["a" /* default */], { key: interest.id, url: interest.avatar, name: interest.name })))));
}));


/***/ }),

/***/ "./src/Containers/App/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__ = __webpack_require__("./src/Components/Layouts/MainLayout/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_Layouts_Header__ = __webpack_require__("./src/Components/Layouts/Header/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_Loading__ = __webpack_require__("./src/Components/Loading/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_Layouts_SideBar__ = __webpack_require__("./src/Components/Layouts/SideBar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Theme_application_scss__ = __webpack_require__("./src/Theme/application.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_Theme_application_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_Theme_application_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_scss__ = __webpack_require__("./src/Containers/App/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__style_scss__);












// import { cookies } from '../../link';
const Home = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Home/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const NotFound = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/NotFound/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Profile = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Profile/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const PublicHome = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/HomePublic/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Login = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Login/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Signup = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const ArticleDetail = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ArticleDetail/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Interest = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/interest.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Maps = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Maps/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Compose = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/ComposeArticle/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Message = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Message/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const Forum = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Forum/index.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const FinishSignup = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/finishSignup.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
const SignupProfile = __WEBPACK_IMPORTED_MODULE_4_react_loadable___default()({
    loader: () => new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, "./src/Containers/Auth/Signup/signupProfile.tsx")),
    loading: () => __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_Loading__["a" /* default */], null),
});
class App extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            isAuthenticated: false,
            token: '',
            expireToken: false,
            avatar: '',
            me: {
                id: '',
                firstname: '',
                lastname: '',
                email: '',
            },
        };
        this.refreshToken = (token) => {
            this.setState({
                token,
            });
            if (token !== '' && token !== undefined) {
                this.setState({
                    isAuthenticated: true,
                });
                // this.loadMe();
            }
        };
        this._logout = () => {
            // localStorage.removeItem(AUTH_TOKEN);
            this.setState({ isAuthenticated: false });
            this.setState({ token: '' });
            this.setState({ expireToken: false });
        };
    }
    componentWillMount() {
        /*const token = cookies.get(AUTH_TOKEN);
        cookies.set('test', 'a', {
          expires: new Date(2020-05-04),
          path: '/api',
          domain: '*.example.com',
          secure: true
        });
        if (token !== null && token !== undefined) {
            const expired = isTokenExpired(token);
            if (!expired) {
                this.setState({ isAuthenticated: true });
                this.setState({ token });
                this.setState({ expireToken: expired });
                this.loadMe();
            } else {
                cookies.remove(AUTH_TOKEN, '', -1);
                this.setState({ isAuthenticated: false });
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        }*/
    }
    componentDidMount() {
        // this.props.
        // tslint:disable-next-line:no-console
        console.log(this.props.me);
    }
    loadMe() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_9_Graphql_Query__["g" /* ME */],
        })
            .then(({ data }) => {
            // tslint:disable-next-line:no-console
            console.log(data.me);
            this.setState({ me: data.me });
            if (data.me.completedProfile === 1) {
                this.props.history.replace('/add/profile');
            }
            else if (data.me.completedProfile === 2) {
                this.props.history.replace('/add/interest');
            }
            this.setState({ avatar: data.me.avata.url });
            // tslint:disable-next-line:no-console
            console.log(this.state.avatar);
        })
            .catch((error) => {
            // localStorage.removeItem(AUTH_TOKEN);
            if (error) {
                // tslint:disable-next-line:no-console
                console.log('grooom');
                // this.setState({isAuthenticated: false});
                this.setState({ token: '' });
                this.setState({ expireToken: false });
            }
        });
    }
    render() {
        const { isAuthenticated } = this.state;
        // const userAuthed = token ? true : false;
        // tslint:disable-next-line:no-console
        console.log(isAuthenticated);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-offcanvas-content bg-muted", style: { minHeight: '40vh', backgroundColor: '#e4e6eb' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn community" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_Layouts_Header__["a" /* PrivateHeader */], { avatar: this.state.avatar, isAuthenticated: isAuthenticated, logout: this._logout }),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: "/", render: () => isAuthenticated ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, isAuthenticated: isAuthenticated })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: PublicHome, isAuthenticated: isAuthenticated })) }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { component: Home, path: "/home", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, refreshToken: this.refreshToken, path: "/login", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Login, exact: true, refreshToken: this.refreshToken, path: "/login/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, refreshToken: this.refreshToken, path: "/signup", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["d" /* PublicLayout */], { component: Signup, exact: true, refreshToken: this.refreshToken, path: "/signup/:email", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: FinishSignup, path: "/signup/complete", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { exact: true, component: SignupProfile, path: "/add/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { path: "/article/:slug", isAuthenticated: isAuthenticated, component: ArticleDetail }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Interest, path: "/add/interest", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Maps, path: "/library", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Message, path: "/message", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Forum, path: "/Forum", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["a" /* EmptyLayout */], { component: Compose, path: "/write", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["c" /* ProfileLayout */], { component: Profile, path: "/profile/:id", isAuthenticated: isAuthenticated }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: NotFound, path: "*" }),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_Layouts_MainLayout__["b" /* PrivateLayout */], { path: "/logout", isAuthenticated: isAuthenticated, render: () => this._logout() })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_Layouts_SideBar__["a" /* default */], null)));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_3_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_9_Graphql_Query__["g" /* ME */]))(App)));


/***/ }),

/***/ "./src/Containers/ArticleDetail/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__ = __webpack_require__("./src/Components/ArticleItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Components_CommentEditor__ = __webpack_require__("./src/Components/CommentEditor/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_TopInterest__ = __webpack_require__("./src/Components/TopInterest/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Components_LikeButton__ = __webpack_require__("./src/Components/LikeButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_Components_PopoverLink__ = __webpack_require__("./src/Components/PopoverLink/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeago__ = __webpack_require__("react-timeago");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_timeago__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css__ = __webpack_require__("./src/Containers/ArticleDetail/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_Components_Label__ = __webpack_require__("./src/Components/Label/index.tsx");













class ArticleDetail extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            // tslint:disable-next-line:no-object-literal-type-assertion
            currentArticle: {},
            loading: true,
        };
    }
    componentWillMount() {
        const { match: { params } } = this.props;
        // tslint:disable-next-line:no-console
        console.log(params);
        if (params.slug) {
            this.fetchArticleandOthers(params.slug);
        }
        else {
            this.props.history.goBack();
        }
    }
    // tslint:disable-next-line:typedef
    componentDidUpdate(prevProps) {
        // tslint:disable-next-line:no-console
        console.log(prevProps);
        const oldId = prevProps.match.params.slug;
        const newId = this.props.match.params.slug;
        // tslint:disable-next-line:no-console
        console.log(oldId);
        if (newId !== oldId) {
            this.fetchArticleandOthers(oldId);
        }
    }
    fetchArticleandOthers(slugOrId) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_11_Graphql_Query__["f" /* GET_ARTICLE_BY_ID */],
            variables: {
                id: slugOrId,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getArticleById);
            this.setState({ currentArticle: result.data.getArticleById, loading: false });
        })
            .catch((err) => {
            // tslint:disable-next-line:no-console
            console.log(err);
            this.props.history.replace('/not-found');
        });
    }
    componentWillUnmount() {
        // allows us to ignore
    }
    renderArticle(article) {
        const { author } = article;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 22, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 post-metadata uk-padding-remove-bottom uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex uk-width-4-5", "uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 50, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_8_Components_PopoverLink__["a" /* default */], { bigger: true, link: article.id },
                            author.firstname,
                            " ",
                            author.lastname),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("time", { dateTime: article.createdAt },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_9_react_timeago___default.a, { className: "timeago", date: article.createdAt }),
                                " ago \u0095",
                                ' ',
                                article.body.lengthInMinutes())))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-5 uk-flex-center" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small" }, "Connect"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card-body uk-padding-remove-vertical", style: { paddingTop: 10, borderBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: 23, fontFamily: 'Open Sans' } }, article.title),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { color: '#212121', fontSize: 17 } }, article.body)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_TopInterest__["a" /* default */], null)),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-stats clearfix uk-padding-small uk-padding-remove-horizontal", style: { paddingTop: 10, paddingBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex pull-left uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7_Components_LikeButton__["a" /* default */], { liked: true, likeCount: 2 }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-margin-left" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon:  forward; ratio: 1.2" }),
                        "Share")),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex  response-count pull-right uk-padding-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "dropdown" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text uk-margin-right", type: "button" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: more; ratio: 1.0" })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-drop": "mode: click; pos: bottom-right" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "menu" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: plus-circle; ratio: 1" }),
                                        " Activity")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: warning; ratio: 1" }),
                                        " Don't like this")),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "menu-item uk-padding-small" },
                                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#", className: "uk-text-bold" },
                                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: info; ratio: 1" }),
                                        " Report"))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-text" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: bookmark; ratio: 1.2" }),
                        " Favourite")))));
    }
    renderCommentBox() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-width-1-1", style: { borderRadius: 1, marginBottom: 30, padding: 10, backgroundColor: '#fff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex", "uk-grid": true, style: { padding: 0, marginTop: 3 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 30, presence: false })),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" }, "John Doe")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_Components_CommentEditor__["a" /* default */], null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small uk-text-right" }, "Comment")));
    }
    renderComment() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("article", { className: "uk-comment uk-visible-toggle uk-padding-small", style: { backgroundColor: '#fff', marginBottom: 10 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("header", { className: "uk-comment-header uk-position-relative" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-medium uk-flex-middle", "data-uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_Components_Avatar__["a" /* default */], { url: "https://getuikit.com/docs/images/avatar.jpg", size: 40, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-expand" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h4", { className: "uk-comment-title uk-margin-remove" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "Author")),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-comment-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-reset", href: "#" }, "12 days ago")))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-top-right uk-position-small uk-hidden-hover" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-link-muted", href: "#" }, "Reply"))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-comment-body" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."))));
    }
    renderCommentList() {
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-card-small uk-width-1-1", style: { backgroundColor: 'transparent' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Comment responses" }),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment(),
            this.renderComment()));
    }
    render() {
        if (this.state.loading) {
            // tslint:disable-next-line:jsx-wrap-multiline
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-center" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "loader uk-margin-small" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "bullet" }))));
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-padding" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-button-small uk-margin-bottom-right", onClick: () => this.props.history.goBack() }, "Go Back"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-grid uk-flex-stretch" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-3-3@s" },
                    this.renderArticle(this.state.currentArticle),
                    this.renderCommentBox(),
                    this.renderCommentList()),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_12_Components_Label__["a" /* default */], { text: "Similar articles" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4_Components_ArticleItem__["a" /* default */], { article: this.state.currentArticle, small: true })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"])(ArticleDetail)));


/***/ }),

/***/ "./src/Containers/Auth/Login/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet__ = __webpack_require__("react-helmet");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss__ = __webpack_require__("./src/Containers/Auth/Login/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./src/constants.ts");









class Login extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            password: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password } = this.state;
            this.props
                .login({
                variables: {
                    email,
                    password,
                },
            })
                .then((result) => {
                const token = result.data.login.token;
                const user = result.data.login.user;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_8__constants__["b" /* CURRENT_USER */], result.data.login.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                if (user.completedProfile === 1) {
                    this.props.history.replace('/add/profile');
                }
                else {
                    this.props.history.replace('/');
                }
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_6_uikit__["notification"](`Error: ${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["a" /* validateLogin */])(this.state.email, this.state.password);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_helmet__["Helmet"], null,
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn | Login"),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "an inclusive community", content: "Unizonn login" })),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 sideBg uk-visible@m", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch uk-flex-middle" }, ".")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-vertical uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Login ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: user" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-inline uk-width-1-1" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-form-icon", "uk-icon": "icon: lock" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: `uk-button uk-button-text}` }, "Forgot password?")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-spinner uk-icon", "data-uk-spinner": "ratio: 1", style: { color: 'green' } })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1
                    uk-align-right ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "LOGIN"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Don't have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/signup" }, "Sign up now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Mutation__["c" /* LOGIN_USER */], {
    name: 'login',
}))(Login)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__("./src/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);








class Signup extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            gender: '',
            userType: '',
            firstname: '',
            lastname: '',
            everFocusedEmail: false,
            everFocusedPassword: false,
            inFocus: '',
            loading: false,
        };
        this.handleEmailChange = (evt) => {
            this.setState({ email: evt.target.value });
        };
        this.handlePasswordChange = (evt) => {
            this.setState({ password: evt.target.value });
        };
        this.handleConPasswordChange = (evt) => {
            this.setState({ confirmPassword: evt.target.value });
        };
        this.handleUsernameChange = (evt) => {
            this.setState({ username: evt.target.value });
        };
        this.handleFnameChange = (evt) => {
            this.setState({ firstname: evt.target.value });
        };
        this.handleLnameChange = (evt) => {
            this.setState({ lastname: evt.target.value });
        };
        this.handleUserTypeChange = (evt) => {
            this.setState({ userType: evt.target.value });
        };
        this.handleGenderChange = (evt) => {
            this.setState({ gender: evt.target.value });
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            const { email, password, username, firstname, lastname, gender, userType } = this.state;
            this.props
                .signup({
                variables: {
                    email,
                    password,
                    username,
                    firstname,
                    lastname,
                    userType,
                    gender,
                },
            })
                .then((result) => {
                const token = result.data.signup.token;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* AUTH_TOKEN */], token);
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_6__constants__["b" /* CURRENT_USER */], result.data.signup.user);
                this.props.refreshToken(token);
                this.setState({ loading: false });
                this.props.history.replace('/add/profile');
            })
                .catch((err) => {
                this.setState({ loading: false });
                __WEBPACK_IMPORTED_MODULE_5_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_4_Utils_helpers__["c" /* validateSignup */])(this.state.email, this.state.password, this.state.username, this.state.confirmPassword, this.state.firstname, this.state.lastname, this.state.gender, this.state.userType);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin", style: { marginTop: 40 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "Signup ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Username"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.username ? 'uk-form-danger' : ''} `, type: "text", value: this.state.username, required: true, onChange: this.handleUsernameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Firstname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "firstname", className: `uk-input ${errors.firstname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.firstname, required: true, onChange: this.handleFnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Lastname"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "lastname", className: `uk-input ${errors.lastname ? 'uk-form-danger' : ''} `, type: "text", value: this.state.lastname, required: true, onChange: this.handleLnameChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Email"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { id: "email", className: `uk-input ${errors.email ? 'uk-form-danger' : ''} `, type: "email", value: this.state.email, required: true, onChange: this.handleEmailChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.password ? 'uk-form-danger' : ''} `, type: "password", id: "password", value: this.state.password, required: true, onChange: this.handlePasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "confirmPassword" }, "Confirm Password"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { className: `uk-input ${errors.confirmPassword ? 'uk-form-danger' : ''} `, type: "password", id: "confirmPassword", value: this.state.confirmPassword, required: true, onChange: this.handleConPasswordChange }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "Gender"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.gender, required: true, onChange: this.handleGenderChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select sex"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Male" }, "Male"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Female" }, "Female")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "form-horizontal-text" }, "I am a"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.userType, required: true, onChange: this.handleUserTypeChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select one"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Student" }, "Student"),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "Lecturer" }, "Lecturer")))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, type: "submit" }, "Sign Up"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: `uk-button uk-button-text}` }, "Already have an account?"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Link"], { className: `uk-button uk-button-secondary
                 uk-align-right`, to: "/login" }, "Login now"))))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Mutation__["d" /* SIGNUP_USER */], {
    name: 'signup',
}))(Signup)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/interest.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid__ = __webpack_require__("react-stack-grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_stack_grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__ = __webpack_require__("./src/Components/InterestItem/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__style_css__);






// import { User } from 'CustomTypings/schema';



class InterestPage extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            selected: ['1'],
            loading: false,
        };
        this.onSelectAdd = (id) => {
            const temp = this.state.selected;
            const index = this.state.selected.indexOf(id);
            if (index === -1) {
                temp.push(id);
            }
            else {
                temp.splice(index, 1);
            }
            this.setState({ selected: temp });
        };
        this.onSelectRemove = (id) => {
            this.state.selected.indexOf(id);
        };
    }
    // tslint:disable-next-line:no-any
    save() {
        // tslint:disable-next-line:no-console
        console.log(this.state.selected);
        let inter = [];
        inter = this.state.selected;
        this.props.client
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */],
            variables: {
                interests: inter,
            },
        })
            .then((result) => {
            console.log(result);
            this.props.history.push('/signup/complete');
        })
            .catch((err) => {
            __WEBPACK_IMPORTED_MODULE_4_uikit__["notification"](`${err.message}`, { status: 'danger', pos: 'top-right' });
        });
    }
    render() {
        // tslint:disable-next-line:no-console
        console.log(this.props.interests.allInterest);
        if (this.props.interests.loading) {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, "Loading");
        }
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1", style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", { className: "uk-postion-top-center uk-text-center", style: { marginTop: 50 } }, "Lets pick your interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-postion-top-center uk-text-center uk-padding" }, "Select minimum of 5 interest"),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_stack_grid___default.a, { columnWidth: 200 }, this.props.interests.allInterest.map((data, i) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_Components_InterestItem__["a" /* default */], { key: i, name: data.name, id: data.id, url: data.avatar, checked: this.state.selected.indexOf(data.id) === -1 ? false : true, onClickAdd: this.onSelectAdd })))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small", style: { position: 'fixed', bottom: 0, right: 40 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary", disabled: this.state.selected.length > 1 ? false : true, onClick: () => this.save() }, "SAVE INTEREST"))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_5_Graphql_Query__["d" /* ALL_INTEREST */], { name: 'interests' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_7_Graphql_Mutation__["a" /* ADD_INTERESTS */], { name: 'addInterests' }))(InterestPage)));


/***/ }),

/***/ "./src/Containers/Auth/Signup/signupProfile.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit__ = __webpack_require__("uikit");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uikit___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uikit__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__ = __webpack_require__("./src/Graphql/Query/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Utils_helpers__ = __webpack_require__("./src/Utils/helpers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__ = __webpack_require__("./src/Graphql/Mutation/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css__ = __webpack_require__("./src/Containers/Auth/Signup/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__style_css__);








class SignupProfile extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor() {
        super(...arguments);
        this.state = {
            show: false,
            country: '',
            photo: '',
            url: '',
            countryList: [],
            institution: '',
            institutionList: [],
            department: '',
            departmentList: [],
            everFocusedInstitution: false,
            everFocusedCountry: false,
            inFocus: '',
            loading: false,
        };
        this.handleInstChange = (evt) => {
            this.setState({ institution: evt.target.value });
            this.getDepartment(evt.target.value);
        };
        this.handleDeptChange = (evt) => {
            this.setState({ department: evt.target.value });
        };
        this.handleCountryChange = (evt) => {
            this.setState({ country: evt.target.value });
            this.getInstitution(evt.target.value);
        };
        this.handleSubmit = (evt) => {
            evt.preventDefault();
            if (!this.canBeSubmitted()) {
                return;
            }
            this.setState({ loading: true });
            this.props
                .addProfile({
                variables: {
                    photoId: this.state.photo,
                    countryId: this.state.country,
                    institutionId: this.state.institution,
                    departmentId: this.state.department,
                },
            })
                .then((result) => {
                this.props.history.replace('/add/interest');
            })
                .catch((err) => {
                // Err catch block
            });
        };
    }
    canBeSubmitted() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return !isDisabled;
    }
    getCountry() {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */],
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result.data.getCountry);
            this.setState({ countryList: result.data.getCountry });
        })
            .catch((err) => {
            // jkjk
        });
    }
    getInstitution(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["c" /* ALL_INSTITUTION */],
            variables: {
                idCountry: value,
            },
        })
            .then((result) => {
            // tslint:disable-next-line:no-console
            console.log(result);
            this.setState({ institutionList: result.data.getInstitution });
        })
            .catch((err) => {
            // jkjk
        });
    }
    getDepartment(value) {
        this.props.client
            .query({
            query: __WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["b" /* ALL_DEPARTMENTS */],
            variables: {
                idInstitutions: value,
            },
        })
            .then((result) => {
            this.setState({ departmentList: result.data.getDepartment });
        })
            .catch((err) => {
            // jkjk
        });
    }
    componentWillMount() {
        const email = this.props.location.email;
        if (email) {
            this.setState({ email });
        }
        this.getCountry();
    }
    componentDidMount() {
        const bar = document.getElementById('js-progressbar');
        __WEBPACK_IMPORTED_MODULE_3_uikit__["upload"]('.js-upload', {
            url: 'https://uniserver.now.sh/upload',
            multiple: false,
            name: 'data',
            dataType: 'json',
            beforeSend() {
                // fd
            },
            beforeAll() {
                // fd
            },
            load() {
                // fd
            },
            error() {
                // tslint:disable-next-line:no-console
                console.log('error', arguments);
            },
            complete() {
                // tslint:disable-next-line:no-console
                console.log('complete', arguments);
            },
            // tslint:disable-next-line:typedef
            loadStart(e) {
                // tslint:disable-next-line:no-console
                console.log('loadStart', arguments);
                if (bar) {
                    bar.removeAttribute('hidden');
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            progress(e) {
                // tslint:disable-next-line:no-console
                console.log('progress', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            // tslint:disable-next-line:typedef
            loadEnd(e) {
                // tslint:disable-next-line:no-console
                console.log('loadEnd', arguments);
                if (bar) {
                    bar.max = e.total;
                    bar.value = e.loaded;
                }
            },
            completeAll: (result, response) => {
                // tslint:disable-next-line:no-console
                console.log('completeAll', result.response);
                const data = JSON.parse(result.response);
                this.setState({ photo: data.id, url: data.url });
                setTimeout(() => {
                    if (bar) {
                        bar.setAttribute('hidden', 'hidden');
                    }
                }, 1000);
            },
        });
    }
    render() {
        const errors = Object(__WEBPACK_IMPORTED_MODULE_5_Utils_helpers__["b" /* validateProfile */])(this.state.photo, this.state.country, this.state.institution, this.state.department);
        const isDisabled = Object.keys(errors).some((x) => errors[x]);
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-flex-stretch", "data-uk-grid": true, style: { height: '100vh', backgroundColor: '#ffffff' } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-5 uk-visible@m sideBg uk-flex uk-flex-middle ", id: "sideBg" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-position-relative uk-visible-toggle uk-light", "data-uk-slideshow": "animation: scale" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "uk-slideshow-items" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/photo.jpg", alt: "", "uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/dark.jpg", alt: "", "data-uk-cover": true })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://getuikit.com/docs/images/light.jpg", alt: "", "data-uk-cover": true }))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-left uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-previous": true, "data-uk-slideshow-item": "previous" }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-position-center-right uk-position-small uk-hidden-hover", href: "#", "data-uk-slidenav-next": true, "data-uk-slideshow-item": "next" }))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-container uk-width-3-5@m uk-width-1-1@s uk-flex\n          uk-flex-stretch uk-flex-middle uk-box-shadow-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", { className: "uk-form-horizontal uk-width-1-1 uk-margin-large uk-padding-large uk-padding-remove-vertical", onSubmit: this.handleSubmit },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h3", { className: "uk-heading-primary uk-align-center" }, "You're Almost done ")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "js-upload uk-placeholder uk-text-center" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: cloud-upload" }),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-text-middle" }, "Attach photo by dropping it here or "),
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "uk-form-custom": "" },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "file", multiple: false }),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { className: "uk-link" }, "selecting one"))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { className: "uk-border-circle", src: this.state.url, width: "90", height: "90" }),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("progress", { id: "js-progressbar", className: "uk-progress", value: "0", max: "100", hidden: true })),
                    this.state.department,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "firstname" }, "Country"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.country, required: true, onChange: this.handleCountryChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select country"),
                                this.state.countryList.map((country, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: country.id }, country.name)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "lastname" }, "Institution"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.institution, required: true, onChange: this.handleInstChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select institution"),
                                this.state.institutionList.map((institution, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: institution.id }, institution.title)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { className: "uk-form-label", htmlFor: "email" }, "Course"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-form-controls" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("select", { className: "uk-select", value: this.state.department, required: true, onChange: this.handleDeptChange },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { value: "" }, "Select course"),
                                this.state.departmentList.map((course, i) => (
                                // tslint:disable-next-line:jsx-key
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("option", { key: i, value: course.id }, course.name)))))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-margin" }, this.state.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-spinner": "ratio: 1" })) : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: `uk-button uk-button-primary uk-width-1-1 ${isDisabled ? 'disabled' : 'disabled'}`, disabled: isDisabled, type: "submit" }, "SAVE & NEXT"))),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", { className: "uk-divider-icon" })))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_4_Graphql_Query__["a" /* ALL_COUNTRIES */], { name: 'country' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__["b" /* ADD_PROFILE */], { name: 'addProfile' }), Object(__WEBPACK_IMPORTED_MODULE_2_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_6_Graphql_Mutation__["b" /* ADD_PROFILE */], {
    name: 'addProfile',
}))(SignupProfile)));


/***/ }),

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
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1" },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex uk-padding-large" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-2-3@m uk-width-1-1@s" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-small uk-card-default", style: { paddingTop: 10 } }, "jkjk"),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card uk-card-large uk-card-default", style: { minHeight: '60vh', paddingTop: 10 } },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Editor2__["a" /* default */], null))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-3@m uk-width-1-1@s uk-padding-small uk-padding-remove-vertical" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-1-1 uk-margin-small-bottom" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-secondary uk-width-1-2", type: "button" }, "Go Back"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "uk-button uk-button-primary uk-width-1-2", type: "button" }, "Publish")),
                    !this.props.allInterest.loading ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_select_plus___default.a, { name: "form-field-name", value: value, onChange: this.handleChange, placeholder: "Add categories or interest", multi: true, closeOnSelect: true, removeSelected: this.state.removeSelected, simpleValue: false, options: category })) : null))));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["withRouter"])(Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["compose"])(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["withApollo"], Object(__WEBPACK_IMPORTED_MODULE_5_react_apollo__["graphql"])(__WEBPACK_IMPORTED_MODULE_3_Graphql_Query__["d" /* ALL_INTEREST */], {
    name: 'allInterest',
}))(ComposeWrite)));


/***/ }),

/***/ "./src/server.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__ = __webpack_require__("react-loadable/webpack");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable__ = __webpack_require__("react-loadable");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_loadable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_loadable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json__ = __webpack_require__("./build/react-loadable.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Containers_App__ = __webpack_require__("./src/Containers/App/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_client__ = __webpack_require__("apollo-client");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_apollo_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_apollo_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo__ = __webpack_require__("react-apollo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_react_apollo___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_react_apollo__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__ = __webpack_require__("apollo-cache-inmemory");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_link__ = __webpack_require__("apollo-link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_apollo_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_apollo_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__link__ = __webpack_require__("./src/link.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_Html__ = __webpack_require__("./src/Html.tsx");













// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';


const links = [
    __WEBPACK_IMPORTED_MODULE_13__link__["a" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["c" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["d" /* stateLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["b" /* httpLinkAuth */]
];
let assets;
String.prototype.truncString = function (add, max) {
    add = add || '...';
    return (this.length > max ? this.substring(0, max) + add : this);
};
String.prototype.lengthInMinutes = function () {
    const min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
        return 'less than a minute read';
    }
    else if (min <= 0.9 || min === 0.9) {
        return 'less than a minute read';
    }
    else {
        return `${min} min read`;
    }
};
const syncLoadAssets = () => {
    assets = __webpack_require__("./build/assets.json");
};
syncLoadAssets();
const server = __WEBPACK_IMPORTED_MODULE_0_express__();
server
    .disable('x-powered-by')
    .use(__WEBPACK_IMPORTED_MODULE_0_express__["static"]("C:\\Users\\juicycleff\\Documents\\Projects\\Unizonn\\unizonn\\public"))
    .get('/*', (req, res) => {
    if (false) {
        // links.unshift(createPersistedQueryLink());
    }
    const client = new __WEBPACK_IMPORTED_MODULE_9_apollo_client___default.a({
        ssrMode: true,
        link: __WEBPACK_IMPORTED_MODULE_12_apollo_link__["ApolloLink"].from(links),
        cache: new __WEBPACK_IMPORTED_MODULE_11_apollo_cache_inmemory__["InMemoryCache"](),
    });
    const context = {};
    const modules = [];
    const markup = (
    // tslint:disable-next-line:no-unused-expression
    __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_loadable__["Capture"], { report: (moduleName) => modules.push(moduleName) },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_apollo__["ApolloProvider"], { client: client },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Containers_App__["a" /* default */], null)))));
    const bundles = Object(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json___default.a, modules);
    const chunks = bundles.filter((bundle) => bundle.file.endsWith('.js'));
    Object(__WEBPACK_IMPORTED_MODULE_10_react_apollo__["renderToStringWithData"])(markup).then((content) => {
        res.status(200);
        const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14_Html__["a" /* default */], { assets: assets, markup: markup, client: client });
        res.send(`<!doctype html>\n${Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToStaticMarkup"])(html)}`);
        res.end();
    })
        .catch((e) => {
        console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
        res.status(500);
        res.end(`An error occurred. Please submit an issue to [https://github.com/apollographql/GitHunt-React] with the following stack trace:\n\n${e.stack}`);
    });
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ }),

/***/ "react-apollo":
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

};
//# sourceMappingURL=0.1350d3489cf419261a37.hot-update.js.map