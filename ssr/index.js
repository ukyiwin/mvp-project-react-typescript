import express from 'express';
// import asyncBootstrapper from 'react-async-bootstrapper';
import serverRenderer from './middlewares/renderer';

const PORT = 3000;
const path = require('path');

// initialize the application and create the routes
const app = express();
const router = express.Router();

// tslint:disable-next-line:no-console
console.log('listening on ghgh');

// root (/) should always serve our server rendered page
router.use('^/$', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));

app.use(router);

// start the app
app.listen(PORT, (error) => {
  if (error) {
      // tslint:disable-next-line:no-console
      return console.log('something bad happened', error);
  }
  // tslint:disable-next-line:no-console
  console.log('listening on ' + PORT + '...');
});