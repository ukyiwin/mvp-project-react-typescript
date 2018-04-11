//tslint:disable
import * as React from 'react';
import serialize from 'serialize-javascript';
import Helmet from 'react-helmet';
const helmet = Helmet.renderStatic();
// const htmlAttrs = helmet.htmlAttributes.toComponent();
// const bodyAttrs = helmet.bodyAttributes.toComponent();

const Html = ({ assets, markup, client: { cache }, asyncState, styleTags }) => (
  <html lang="en">
    <head>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta charSet="utf-8" />
      <title>Unizonn</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta property="og:image:width" content="145"/>
      <meta property="og:image:height" content="76"/>
      <meta property="og:title" content="Unizonn"/>
      <meta property="og:url" content="http://unizonn.com"/>
      <meta property="og:image" content="http://unizonn.com/static/og-image.jpg"/>
      <meta property="og:description" content="social community for students and academia"/>
      <meta name="theme-color" content="teal" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
              
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/button.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/card.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/search.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/reset.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/segment.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/video.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/image.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/input.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/item.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/components/list.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Crimson+Text|Muli|Raleway" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg" crossOrigin="anonymous" />
      {
        assets.client.css
          ? <link rel="stylesheet" href={assets.client.css} />
          : null
      }
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" crossOrigin="anonymous" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" crossOrigin="anonymous"  />
      <script src="node_modules/semantic-ui-css/semantic.min.js" crossOrigin="anonymous" />
      <link rel="manifest" href="/manifest.json" />
      <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
      <script>
      {
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
          OneSignal.init({
            appId: "9e1ee800-58fa-4035-b77c-5c65fdb5257f",
            autoRegister: false,
            notifyButton: {
              enable: true,
            },
          })
        });
      }
      </script>
      {
        process.env.NODE_ENV === 'production'
          ? <script src={assets.client.js} defer />
          : <script src={assets.client.js} defer crossOrigin="anonymous" />
      }
    </head>
    <body>
      <div id="root">{markup}</div>
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `,`,
        }}
        crossOrigin="anonymous"
      />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.__APOLLO_STATE__=${JSON.stringify(cache.extract())};`,
        }}
        crossOrigin="anonymous"
      />
      <script
        charSet="UTF-8"
        dangerouslySetInnerHTML={{
          __html: `window.ASYNC_COMPONENT_STATE=${serialize(asyncState)};`,
        }}
        crossOrigin="anonymous"
      />
      <script src="/static/bundle.js" charSet="UTF-8" crossOrigin="anonymous"/>
      <script src="https://unpkg.com/material-components-web@latest/dist/material-components-web.js" />
      <script crossOrigin="anonymous">mdc.autoInit()</script>
    </body>
  </html>
);

export default Html;
      // <script src="/semantic-ui/semantic.js" />