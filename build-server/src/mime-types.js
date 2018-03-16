"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const data = {
    '.js': 'application/javascript',
    '.map': 'application/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.html': 'text/html',
    '.txt': 'text/plain',
};
function lookup(path) {
    const ext = path_1.extname(path);
    const mime = data[ext];
    if (!mime) {
        throw new Error(`No mime type for file: ${path}`);
    }
    return mime;
}
exports.lookup = lookup;
//# sourceMappingURL=mime-types.js.map