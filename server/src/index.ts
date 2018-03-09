import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';
import fileApi from './modules/fileApi';

let Parser = require('rss-parser');
const cron = require('node-cron');
const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://uniserver.now.sh', 'https://eu1.prisma.sh/boldsofts/unizonn/dev'];
const corsOptions = {
  // tslint:disable-next-line:typedef
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const getPrismaInstance = () => {
  return new Prisma({
    endpoint: process.env.PRISMA_ENDPOINT,  // Prisma service endpoint (see `~/.prisma/config.yml`)
    secret: process.env.PRISMA_SECRET,      // `secret` taken from `prisma.yml`
    debug: true                             // log all requests to the Prisma API to console
  });
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
      debug: true, // log all GraphQL queries & mutations
    }),
  }),
});
server.express.use(cors(corsOptions));
server.express.post(
  '/upload',
  fileApi({
    prisma: getPrismaInstance()
  })
);

server.start(() => {
  // tslint:disable-next-line:no-console
  console.log('==========================================');
  // tslint:disable-next-line:no-console
  console.log(`Server is running on http://localhost:4000`);
  // tslint:disable-next-line:no-console
  console.log('==========================================');
});

/************************************RSS FEEDS SCRAPER********************************/
let parserSd = new Parser({
  customFields: {
    feed: ['description'],
    item: ['description',
    ['media:thumbnail ', 'media:thumbnail ', {keepArray: true}], ],
  }
});
cron.schedule('* * * * *', function() {
  // tslint:disable-next-line:no-console
  console.log('running a task every minute');
  (async () => {

    let feed = await parserSd.parseURL('https://www.sciencedaily.com/rss/top/science.xml');
    // tslint:disable-next-line:no-console
    console.log(feed.title);
  
    feed.items.forEach(item => {
      // tslint:disable-next-line:no-console
      // console.log(item.title + ':' + item.link);
      // tslint:disable-next-line:no-console
      // console.log(item.content);
      // tslint:disable-next-line:no-console
      // console.log(item);
    });
    // tslint:disable-next-line:no-console
    console.log(feed.items[0]);
  })();
});