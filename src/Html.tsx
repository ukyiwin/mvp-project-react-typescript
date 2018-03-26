//tslint:disable
import * as React from 'react';
import serialize from 'serialize-javascript';

const Html = ({ assets, markup, client: { cache }, asyncState }) => (
  <html lang="en">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Unizonn</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
              
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="teal" />
      
      <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/themes/default/assets/fonts/icons.ttf" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/themes/default/assets/fonts/brand-icons.tt" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/themes/default/assets/fonts/outline-icons.tt" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css" rel="stylesheet prefetch" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/icon.min.css" rel="stylesheet prefetch" crossOrigin="anonymous" />
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg" crossOrigin="anonymous" />

      {
        assets.client.css
          ? <link rel="stylesheet" href={assets.client.css} />
          : null
      }
      {
        process.env.NODE_ENV === 'production'
          ? <script src={assets.client.js} defer />
          : <script src={assets.client.js} defer crossOrigin="anonymous" />
      }
              
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
    </head>
    <body>
      <div id="root">{markup}</div>
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `,`,
        }}
      />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
        }}
      />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.ASYNC_COMPONENT_STATE=${serialize(asyncState)};`,
        }}
      />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.js" />
      <script src="./crack.js" />
      <script src="./timeago-in-words.js" />
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.js" />
      <script>mdc.autoInit()</script>
      <script>
        {
        // tslint:disable-next-line:only-arrow-functions
        /*function anima() {
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
        };*/
        }
      </script>
      <script src="/static/bundle.js" charSet="UTF-8" />
    </body>
  </html>
);

export default Html;