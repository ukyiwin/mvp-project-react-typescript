import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import { getBundles } from 'react-loadable/webpack';
import { Capture } from 'react-loadable';
import stats from '../build/react-loadable.json';
import App from './Containers/App';
import 'isomorphic-unfetch';
import ApolloClient from 'apollo-client';
import { ApolloProvider, renderToStringWithData } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';
// import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import {
  errorLink,
  httpLinkAuth,
  requestLink,
  retryLink,
  stateLink
} from './link';

const links = [
  errorLink,
  retryLink,
  stateLink,
  httpLinkAuth
];

let assets: any;

String.prototype.truncString = function(this: string, add: string, max: number) {
  add = add || '...';
  return (this.length > max ? this.substring(0, max) + add : this);
};

String.prototype.lengthInMinutes = function(this: string) {
  
    const min = this.split(' ').length / 250;
    if (min <= 0 || min === 0) {
      return 'less than a minute read';
    } else if (min <= 0.9 || min === 0.9) {
      return 'less than a minute read';
    } else {
      return `${min} min read`;
    }
};

const syncLoadAssets = () => {
    assets = require(process.env.RAZZLE_ASSETS_MANIFEST!);
};
syncLoadAssets();

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR!))
  .get('/*', (req: express.Request, res: express.Response) => {
    
    if (process.env.NODE_ENV === 'production') {
      // links.unshift(createPersistedQueryLink());
    }

    const client = new ApolloClient({
      ssrMode: true,
      link: ApolloLink.from(links),
      cache: new InMemoryCache(),
    });
    
    const context = {} as any;
    const modules = [] as any;
    const markup = renderToString(
      <Capture report={(moduleName) => modules.push(moduleName)}>
      <ApolloProvider client={client}>
          <StaticRouter context={context} location={req.url}>
            <App />
          </StaticRouter>
      </ApolloProvider>
      </Capture>,
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      const bundles = getBundles(stats, modules);
      const chunks = bundles.filter((bundle) => bundle.file.endsWith('.js'));
      res.send(
        `<!doctype html>
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
              <link href='https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/assets/owl.carousel.css' rel='stylesheet'>
              <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet">
              <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
              <link src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg"></script>

              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${assets.client.js}" defer crossorigin></script>`
              }
              
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js"></script>
          </head>
          <body>
              <div id="root">${markup}</div>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>
              <script src="./js/lib/jquery.js"></script>
              <script src="./js/lib/bootstrap.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.2/owl.carousel.min.js"></script>
              <script src="./js/lib/css3-animate-it.js"></script>
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
        </html>`
      );
    }
  });

export default server;
