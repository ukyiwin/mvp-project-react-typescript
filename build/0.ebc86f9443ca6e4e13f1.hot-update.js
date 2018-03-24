exports.id = 0;
exports.modules = {

/***/ "./src/Html.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript__ = __webpack_require__("serialize-javascript");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_serialize_javascript__);
//tslint:disable


const Html = ({ assets, markup, client: { cache }, asyncState }) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", { lang: "en" },
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("head", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { charSet: "utf-8" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("title", null, "Unizonn"),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "mobile-web-app-capable", content: "yes" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "manifest", href: "/site.webmanifest" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "msapplication-TileColor", content: "#da532c" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("meta", { name: "theme-color", content: "teal" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Poppins", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "node_modules/material-components-web/dist/material-components-web.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/assets/owl.carousel.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        assets.client.css
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "stylesheet", href: assets.client.css })
            : null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" }),
         false
            ? React.createElement("script", { src: assets.client.js, defer: true })
            : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: assets.client.js, defer: true, crossOrigin: "anonymous" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "root" }, markup),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `,`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.ASYNC_COMPONENT_STATE=${__WEBPACK_IMPORTED_MODULE_1_serialize_javascript___default()(asyncState)};`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/jquery.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/bootstrap.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/owl.carousel.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./js/lib/css3-animate-it.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./crack.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "./timeago-in-words.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", null),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "/static/bundle.js", charSet: "UTF-8" }))));
/* harmony default export */ __webpack_exports__["a"] = (Html);


/***/ })

};
//# sourceMappingURL=0.ebc86f9443ca6e4e13f1.hot-update.js.map