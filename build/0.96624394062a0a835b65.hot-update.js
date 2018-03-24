exports.id = 0;
exports.modules = {

/***/ "./src/Html.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
//tslint:disable

const Html = ({ assets, markup, client: { cache } }) => (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("html", { lang: "en" },
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
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/assets/owl.carousel.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css", rel: "stylesheet", crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg", crossOrigin: "anonymous" }),
        assets.client.css
            ? __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("link", { rel: "stylesheet", href: assets.client.css })
            : null,
         false
            ? React.createElement("script", { src: assets.client.js, defer: true })
            : __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: assets.client.js, defer: true, crossOrigin: "anonymous" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" })),
    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("body", null,
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { id: "root" },
            "$",
            markup),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `,`,
            } }),
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("script", { charSet: "UTF-8", dangerouslySetInnerHTML: {
                __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
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
    const markup = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5_react_loadable__["Capture"], { report: (moduleName) => modules.push(moduleName) },
        __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_10_react_apollo__["ApolloProvider"], { client: client },
            __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["StaticRouter"], { context: context, location: req.url },
                __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__Containers_App__["a" /* default */], null)))));
    if (context.url) {
        res.redirect(context.url);
    }
    else {
        const bundles = Object(__WEBPACK_IMPORTED_MODULE_4_react_loadable_webpack__["getBundles"])(__WEBPACK_IMPORTED_MODULE_6__build_react_loadable_json___default.a, modules);
        const chunks = bundles.filter((bundle) => bundle.file.endsWith('.js'));
        const html = __WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_14_Html__["a" /* default */], { assets: assets, markup: markup, client: client });
        res.send(__WEBPACK_IMPORTED_MODULE_14_Html__["a" /* default */]);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ })

};
//# sourceMappingURL=0.96624394062a0a835b65.hot-update.js.map