exports.id = 0;
exports.modules = {

/***/ "./src/Components/ArticleItem/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Avatar__ = __webpack_require__("./src/Components/Avatar/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("react-router-dom");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__LikeButton__ = __webpack_require__("./src/Components/LikeButton/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__PopoverLink__ = __webpack_require__("./src/Components/PopoverLink/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_timeago__ = __webpack_require__("react-timeago");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_timeago___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_timeago__);






// tslint:disable-next-line:no-any
class ArticleItem extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
    componentDidMount() {
        // UIkit.notification('MyMessage', 'danger');
    }
    render() {
        const { article } = this.props;
        const { author } = article;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card card uk-card-default mdl-card uk-card-small uk-width-1-1", style: {
                borderRadius: 1,
                marginBottom: this.props.small ? 7 : 15,
                padding: 10,
                backgroundColor: '#fff',
            } },
            this.props.small ? null : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { "data-uk-lightbox": "animation: fade; video-autoplay: true;", className: "uk-inline-clip uk-transition-toggle" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "uk-inline", href: "https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("img", { src: "https://s3.envato.com/files/233580557/02_sign_up_step_1.jpg", className: "img-responsive uk-width-1-1 uk-transition-scale-up uk-transition-opaque", alt: "...", style: { maxHeight: 280 } }))))),
            this.props.small ? null : (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-metadata uk-padding-remove-bottom uk-padding-small" },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-grid-small uk-flex", "uk-grid": true },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__Avatar__["a" /* default */], { url: 'https://getuikit.com/docs/images/avatar.jpg', size: 40, presence: false })),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-width-auto post-info" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__PopoverLink__["a" /* default */], { link: article.id },
                            author.firstname,
                            " ",
                            author.lastname),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { className: "uk-text-meta uk-margin-remove-top" },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("time", { dateTime: article.createdAt },
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_timeago___default.a, { className: "timeago", date: article.createdAt }),
                                " \u0095",
                                ' ',
                                article.body.lengthInMinutes())))))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-card-body uk-padding-remove-vertical simple-link", style: { paddingTop: this.props.small ? 0 : 6, borderBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_router_dom__["Link"], { to: `/article/${article.id}`, className: "simple-link" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h5", { className: "uk-text-medium uk-text-bold uk-text-break", style: { fontSize: this.props.small ? 17 : 23, fontFamily: 'Open Sans' } }, this.props.small
                        ? article.title.truncString('...', 36)
                        : article.title.truncString('...', 140))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("p", { style: { color: '#212121', fontSize: this.props.small ? 14 : 17 } }, this.props.small ? article.body.truncString('...', 70) : article.body.truncString('...', 140))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("hr", null),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "post-stats clearfix uk-padding-small uk-padding-remove-horizontal", style: { paddingTop: 1, paddingBottom: 1 } },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex pull-left" },
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__LikeButton__["a" /* default */], { liked: true, likeCount: 2 }),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-flex uk-inline uk-margin-left uk-margin-right" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: comment; ratio: 1.0" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-visible@s" }, "Comments")),
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { className: "response-count uk-flex uk-inline" },
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: forward; ratio: 1.2" }),
                        " ",
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-visible@s" }, "Share"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "uk-flex  response-count pull-right" },
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
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", { "uk-icon": "icon: bookmark; ratio: 1.2" }))))));
    }
}
/* harmony default export */ __webpack_exports__["a"] = (ArticleItem);
/*

          <div
            data-uk-lightbox="animation: fade; video-autoplay: true;"
            className="uk-inline-clip uk-transition-toggle"
            style={{ borderRadius: 12, marginTop: 10 }}
          >
            <a
              className="uk-inline"
              href="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
            >
              <img
                src="https://picturepan2.github.io/spectre/img/osx-yosemite.jpg"
                className="img-responsive uk-transition-scale-up uk-transition-opaque"
                alt="..."
              />
            </a>
          </div>
*/


/***/ })

};
//# sourceMappingURL=0.ef343ad422c73bf62e9c.hot-update.js.map