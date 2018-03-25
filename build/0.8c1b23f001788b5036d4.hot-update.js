exports.id = 0;
exports.modules = {

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













// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

const links = [
    __WEBPACK_IMPORTED_MODULE_13__link__["b" /* errorLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["d" /* retryLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["e" /* stateLink */],
    __WEBPACK_IMPORTED_MODULE_13__link__["c" /* httpLinkAuth */]
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
        res.send(`<!doctype html>
        <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>Unizonn</title>
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
              <meta name="mobile-web-app-capable" content="yes">
              <!--
                manifest.json provides metadata used when your web app is added to the
                homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
              -->
              <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
              <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
              <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="manifest" href="/site.webmanifest">
              <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
              <meta name="msapplication-TileColor" content="#da532c">
              <meta name="theme-color" content="teal">

              <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
              <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
              <link src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"></script>

              ${assets.client.css
            ? `<link rel="stylesheet" href="${assets.client.css}">`
            : ''}
              ${ false
            ? `<script src="${assets.client.js}" defer></script>`
            : `<script src="${assets.client.js}" defer crossorigin></script>`}
              
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js"></script>
          </head>
          <body>
              <div id="root">${markup}</div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
              <script src="./crack.js"></script>
              <script src="./timeago-in-words.js"></script>
              <script>
                function anima() {
                  [].slice.call(document.querySelectorAll('.grid--effect-vega > .grid__item')).forEach(function(stackEl) {
                    new VegaFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-castor > .grid__item')).forEach(function(stackEl) {
                    new CastorFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-hamal > .grid__item')).forEach(function(stackEl) {
                    new HamalFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-polaris > .grid__item')).forEach(function(stackEl) {
                    new PolarisFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-alphard > .grid__item')).forEach(function(stackEl) {
                    new AlphardFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-altair > .grid__item')).forEach(function(stackEl) {
                    new AltairFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-rigel > .grid__item')).forEach(function(stackEl) {
                    new RigelFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-canopus > .grid__item')).forEach(function(stackEl) {
                    new CanopusFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-pollux > .grid__item')).forEach(function(stackEl) {
                    new PolluxFx(stackEl);
                  });
                  [].slice.call(document.querySelectorAll('.grid--effect-deneb > .grid__item')).forEach(function(stackEl) {
                    new DenebFx(stackEl);
                  });
                };
              </script>
          </body>
        </html>`);
    }
});
/* harmony default export */ __webpack_exports__["default"] = (server);


/***/ })

};
//# sourceMappingURL=0.8c1b23f001788b5036d4.hot-update.js.map