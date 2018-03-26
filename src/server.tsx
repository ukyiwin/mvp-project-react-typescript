import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from './Containers/App';
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component';
import asyncBootstrapper from 'react-async-bootstrapper';
import 'isomorphic-unfetch';
import ApolloClient from 'apollo-client';
import { ApolloProvider, renderToStringWithData, getDataFromTree } from 'react-apollo';
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
import Html from 'Html';

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
    const asyncContext = createAsyncContext();
    const markup = (
      // tslint:disable-next-line:no-unused-expression
      <AsyncComponentProvider asyncContext={asyncContext} >
        <ApolloProvider client={client}>
            <StaticRouter context={context} location={req.url}>
              <App />
            </StaticRouter>
        </ApolloProvider>
      </AsyncComponentProvider>
    );

    asyncBootstrapper(markup).then(() => {

      const asyncState = asyncContext.getState();
      renderToStringWithData(markup).then((content) => {
        res.status(200);
        const html = <Html assets={assets} markup={markup} client={client} asyncState={asyncState} />;
        res.send(`<!doctype html>\n${renderToString(html)}`);
        res.end();
      })
      .catch((e) => {
        console.error('RENDERING ERROR:', e); // eslint-disable-line no-console
        /* res.status(500);
        res.end(
          `An error occurred. Please submit ane:\n\n${
            e.stack
          }`
        );*/
        res.status(200);
        const html = <Html assets={assets} markup={markup} client={client} asyncState={asyncState} />;
        res.send(`<!doctype html>\n${renderToString(html)}`);
        res.end();
      });
    });
    
  });

export default server;
