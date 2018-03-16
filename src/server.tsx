import * as http from 'http';
import * as fs from 'fs';
import * as path from 'path';
import * as express from 'express';

import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import App from './Containers/App';

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

    const ReactApp = ReactDOMServer.renderToString(React.createElement(App));
    const renderedHtml = htmlData.replace('{{SSR}}', ReactApp);
    res.status(200).send(renderedHtml);
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