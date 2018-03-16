"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
function getUserId(ctx) {
    const Authorization = ctx.request.get('Authorization');
    if (Authorization) {
        const token = Authorization.replace('Bearer ', '');
        const { userId } = jwt.verify(token, process.env.APP_SECRET);
        return userId;
    }
    throw new AuthError();
}
exports.getUserId = getUserId;
class AuthError extends Error {
    constructor() {
        super('Not authorized');
    }
}
exports.AuthError = AuthError;
//# sourceMappingURL=utils.js.map