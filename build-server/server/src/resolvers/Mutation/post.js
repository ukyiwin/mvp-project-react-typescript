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
const utils_1 = require("../../utils");
exports.post = {
    createDraft(parent, { title, text }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            return ctx.db.mutation.createPost({
                data: {
                    title,
                    text,
                    isPublished: false,
                },
            }, info);
        });
    },
    publish(parent, { id }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            const postExists = yield ctx.db.exists.Post({
                id,
            });
            if (!postExists) {
                throw new Error(`Post not found or you're not the author`);
            }
            return ctx.db.mutation.updatePost({
                where: { id },
                data: { isPublished: true },
            }, info);
        });
    },
    deletePost(parent, { id }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            const postExists = yield ctx.db.exists.Post({
                id,
            });
            if (!postExists) {
                throw new Error(`Post not found or you're not the author`);
            }
            return ctx.db.mutation.deletePost({ where: { id } });
        });
    },
};
//# sourceMappingURL=post.js.map