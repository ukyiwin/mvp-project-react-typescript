"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const execa = require("execa");
dotenv.config();
/* introspect GitHub API and save the result to `schema.json`
execa.sync('apollo-codegen', [
  'introspect-schema',
  'https://api.github.com/graphql',
  '--output',
  'schema.json',
  '--header',
  'Authorization: bearer ' + process.env.GITHUB_TOKEN,
]);
// tslint:disable-next-line:no-console
console.log('schema.json generated');
*/
// inpsect actual queries in `index.ts` and generate TypeScript types in `schema.ts`
execa.sync('apollo-codegen', [
    'generate',
    'index.ts',
    '--schema',
    'schema.json',
    '--target',
    'typescript',
    '--tag-name',
    'gql',
    '--output',
    'schema.ts',
    '--add-typename',
]);
// tslint:disable-next-line:no-console
console.log('schema.ts generated');
//# sourceMappingURL=generate-schema.js.map