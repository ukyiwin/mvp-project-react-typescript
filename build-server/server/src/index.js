"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const prisma_1 = require("./generated/prisma");
const resolvers_1 = require("./resolvers");
const fileApi_1 = require("./modules/fileApi");
let Parser = require('rss-parser');
const cron = require('node-cron');
const cors = require('cors');
const whitelist = ['http://localhost:3000', 'https://uniserver.now.sh',
    'https://eu1.prisma.sh/boldsofts/unizonn/dev', 'https://unizonn.herokuapp.com', 'https://unizonn.com'];
const corsOptions = {
    // tslint:disable-next-line:typedef
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    }
};
const getPrismaInstance = () => {
    return new prisma_1.Prisma({
        endpoint: process.env.PRISMA_ENDPOINT,
        secret: process.env.PRISMA_SECRET,
        debug: true // log all requests to the Prisma API to console
    });
};
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: resolvers_1.default,
    context: req => (Object.assign({}, req, { db: new prisma_1.Prisma({
            endpoint: process.env.PRISMA_ENDPOINT,
            secret: process.env.PRISMA_SECRET,
            debug: true,
        }) })),
});
server.express.use(cors());
server.express.post('/upload', fileApi_1.default({
    prisma: getPrismaInstance()
}));
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
            ['media:thumbnail ', 'media:thumbnail ', { keepArray: true }],],
    }
});
cron.schedule('* * * * *', function () {
    // tslint:disable-next-line:no-console
    console.log('running a task every minute');
    (() => __awaiter(this, void 0, void 0, function* () {
        let feed = yield parserSd.parseURL('https://www.sciencedaily.com/rss/top/science.xml');
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
    }))();
});
cron.schedule('* * * * *', function () {
    // tslint:disable-next-line:no-console
    console.log('running a task every minute');
    (() => __awaiter(this, void 0, void 0, function* () {
        let feed = yield parserSd.parseURL('https://www.techradar.com/rss');
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
    }))();
});
//# sourceMappingURL=index.js.map