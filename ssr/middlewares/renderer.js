import ReactDOMServer from 'react-dom/server';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';

// read the manifest file
import manifest from '../../build/asset-manifest.json';
// Initialize
require('typescript-require');

// Get functions.ts
var App = require("../../src/Containers/App/index.tsx");
// function to map chunk names to assets
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

// import our main App component
// import App from '../../src/Containers/App';

const path = require('path');
const fs = require('fs');

export default (req, res, next) => {

  // get the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    if (err) {
        // tslint:disable-next-line:no-console
        console.error('err', err);
        return res.status(404).end();
    }
    const modules = [];
    const context = {};

    const asyncContext = createAsyncContext();

    const rootElement = (
      // tslint:disable-next-line:whitespace
      <AsyncComponentProvider asyncContext={asyncContext}>
        <App />
      // tslint:disable-next-line:whitespace
      </AsyncComponentProvider>
    );

  asyncBootstrapper(rootElement).then(() => {
      
      const html = ReactDOMServer.renderToString(rootElement);

      // redirect user if need
      if (context.location) {
        res.redirect(context.location.pathname);
      }
      const extraChunks = extractAssets(manifest, modules)
          .map(c => `<script type="text/javascript" src="/${c}"></script>`);

      // now inject the rendered app into our html and send it
      return res.send(
          htmlData
              .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
              .replace('</body>', extraChunks.join('') + '</body>')
      );
    });
  })
}