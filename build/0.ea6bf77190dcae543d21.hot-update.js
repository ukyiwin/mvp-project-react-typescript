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
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-success uk-text-center float-right", onClick: this.onUnlikeClick }, "Connected"));
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { className: "btn btn-success uk-margin-right float-right", onClick: this.onLikeClick }, "Connect"));
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



/***/ })

};
//# sourceMappingURL=0.ea6bf77190dcae543d21.hot-update.js.map