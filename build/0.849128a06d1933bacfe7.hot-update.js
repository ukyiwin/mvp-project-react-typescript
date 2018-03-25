exports.id = 0;
exports.modules = {

/***/ "./src/Components/FollowButton/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

class FollowButton extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
        this.state = {
            liked: this.props.liked
        };
        this.onUnlikeClick = this.onUnlikeClick.bind(this);
        this.onLikeClick = this.onLikeClick.bind(this);
    }
    componentWillMount() {
        /*const { likeableType, likeableId } = this.props;
    this.token = PubSub.subscribe('LikeButton:onClick', (msg, data) => {
      if (likeableType === data.type && likeableId === data.id) {
        this.setState({ liked: data.liked, likeCount: data.count });
      }
    });*/
    }
    componentWillUnmount() {
        // PubSub.unsubscribe(this.token);
    }
    render() {
        if (this.state.liked) {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "response-count unlike-button uk-text-center", onClick: this.onUnlikeClick }, "Connected"));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "response-count uk-margin-left uk-margin-right", onClick: this.onLikeClick }, "Connected"));
        }
    }
    // tslint:disable-next-line:typedef
    onUnlikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
    // tslint:disable-next-line:typedef
    onLikeClick(e) {
        // this.setState({ liked: data.liked, likeCount: data.count });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FollowButton;



/***/ }),

/***/ "./src/Components/PersonItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_Components_Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__ = __webpack_require__("./src/Components/FollowButton/index.tsx");



// tslint:disable-next-line:typedef
const PersonItem = (props) => {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex boxit" },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_Components_Avatar__["a" /* default */], { url: props.url, size: 40, presence: false }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "", style: { marginLeft: 10 } },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, props.name),
            " ",
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, "I like to eat alot everyday with")),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_Components_FollowButton__["a" /* default */], { liked: false })));
};
/* harmony default export */ __webpack_exports__["a"] = (PersonItem);


/***/ })

};
//# sourceMappingURL=0.849128a06d1933bacfe7.hot-update.js.map