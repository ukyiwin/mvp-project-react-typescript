import { GraphQLServer } from 'graphql-yoga';
import { Prisma } from './generated/prisma';
import resolvers from './resolvers';
import fileApi from './modules/fileApi';
var cloudinary = require('cloudinary');

cloudinary.config({ 
  cloud_name: 'unizonn', 
  api_key: '355132745339183', 
  api_secret: '5rEGv7tHw-D8c-x6-Ih6Ti7VzbM' 
});

const getPrismaInstance = () => {
  return new Prisma({
    typeDefs: './src/schema.graphql',
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
