// tslint:disable
/*import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

import AppRoot from './Containers/App';

const app = express();
const webpack = require('webpack')
const config = require('./config/webpack.server.config');
// const paths = require('./config/serverPath');

const server = http.createServer(app);

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico',
    '/logo.svg'
];

const compiler = webpack(config);

app.use(require("webpack-dev-middleware"), compiler, {
  noInfo: true, publicPath: config.output.publicPath
})

staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        // tslint:disable-next-line:no-console
        console.log(filePath);
        res.sendFile(filePath);
    });
});

app.get('*', (req, res) => {
    const html = path.join(__dirname, '../build/index.html');
    const htmlData = fs.readFileSync(html).toString();

    const context: {url?: string}  = {};

    const ReactApp = ReactDOMServer.renderToString(
        React.createElement(
            StaticRouter,
            {location: req.url, context: context},
            React.createElement(AppRoot)
        )
    );
    
    if (context.url) {
        res.redirect(301, '/');
    } else {
        const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
        res.status(200).send(renderedHtml);
    }
});

server.listen(3000);
/*
import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { AsyncComponentProvider } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';

import AppMain from './Containers/App';

const app = express();

const server = http.createServer(app);

const staticFiles = [
    '/static/*',
    '/asset-manifest.json',
    '/manifest.json',
    '/service-worker.js',
    '/favicon.ico',
    '/logo.svg'
];

staticFiles.forEach(file => {
    app.get(file, (req, res) => {
        const filePath = path.join(__dirname, '../build', req.url);
        // tslint:disable-next-line:no-console
        console.log(filePath);
        res.sendFile(filePath);
    });
});

app.get('*', (req, res) => {
  const html = path.join(__dirname, '../build/index.html');
  const htmlData = fs.readFileSync(html).toString();

  // const ReactApp = ReactDOMServer.renderToString(React.createElement(App));

  const context = {};

  // const asyncContext = createAsyncContext();

  const rootElement = (
    // tslint:disable-next-line:whitespace
    <AsyncComponentProvider>
      <AppMain />
    // tslint:disable-next-line:whitespace
    </AsyncComponentProvider>
  );

  asyncBootstrapper(rootElement).then(() => {
    
    const ReactApp = ReactDOMServer.renderToString(rootElement);
    const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);

    // redirect user if need
    if (context.location) {
      res.redirect(context.location.pathname);
    }
    res.status(200).send(renderedHtml);
    
  });

});

server.listen(3000);*/

import { createServer, ServerResponse } from 'http';
import { createFactory } from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { createReadStream } from 'fs';
import App from './Containers/App';
import { fetchProps } from './props';
import { lookup } from './mime-types';
import { control } from './cache-control';
import {
    faviconUrl,
    stylesUrl,
    reactUrl,
    reactDomUrl,
    browserUrl,
    browserMapUrl,
    propsUrl,
    containerId,
} from './constants';

console.log('Server booting...');
const isProd = process.env.NODE_ENV === 'production';
console.log('Production optimization enabled? ', isProd);
const AppFactory = createFactory(App);
const PORT = process.env.PORT || 3007;
const suffix = isProd ? '.production.min.js' : '.development.js';

createServer(async (req, res) => {
    let { httpVersion, method, url } = req;
    console.log(`${httpVersion} ${method} ${url}`);
    if (!url || url === '/') {
        url = 'index.html';
    }
    try {
        if (url === 'index.html') {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 1));
            res.write(`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="${faviconUrl}" rel="icon" type="image/x-icon" />
                <title>React Example</title>
                <link rel="stylesheet" href="${stylesUrl}" />
            </head>
            <body>
            <div id="${containerId}">`);
            const stream = renderToNodeStream(AppFactory(fetchProps()));
            stream.pipe(res, { end: false });
            stream.on('end', () => {
                res.end(`</div>
                <script src="${reactUrl}"></script>
                <script src="${reactDomUrl}"></script>
                <script src="${browserUrl}"></script>
            </body>
            </html>`);
            });
        } else if (url === propsUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.end(JSON.stringify(fetchProps()));
        } else if (url === reactUrl || url === reactDomUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const name = url.replace('.js', '');
            const file = `./node_modules${name}/umd${name}${suffix}`;
            createReadStream(file).pipe(res);
        } else if (url === stylesUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./src/${url}`;
            createReadStream(file).pipe(res);
        } else if (url === browserUrl || url === browserMapUrl) {
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 7));
            const file = `./dist${url}`;
            createReadStream(file).pipe(res);
        } else {
            url = 'notfound.txt';
            res.setHeader('Content-Type', lookup(url));
            res.setHeader('Cache-Control', control(isProd, 0));
            res.statusCode = 404;
            res.end('404 Not Found');
        }
    } catch (e) {
        console.error(e);
        url = 'notfound.txt';
        res.setHeader('Content-Type', lookup(url));
        res.setHeader('Cache-Control', control(isProd, 0));
        res.statusCode = 500;
        res.end('500 Internal Error');
    }
}).listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
});