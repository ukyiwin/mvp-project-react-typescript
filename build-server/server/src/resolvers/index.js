"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = require("./Query");
const auth_1 = require("./Mutation/auth");
const post_1 = require("./Mutation/post");
const user_1 = require("./Mutation/user");
const chat_1 = require("./Mutation/chat");
const article_1 = require("./Mutation/article");
const AuthPayload_1 = require("./AuthPayload");
exports.default = {
    Query: Query_1.Query,
    Mutation: Object.assign({}, auth_1.auth, post_1.post, user_1.user, chat_1.chat, article_1.article),
    AuthPayload: AuthPayload_1.AuthPayload,
};
//# sourceMappingURL=index.js.map