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
const utils_1 = require("../utils");
exports.Query = {
    feed(parent, args, ctx, info) {
        return ctx.db.query.posts({ where: { isPublished: true } }, info);
    },
    drafts(parent, args, ctx, info) {
        const id = utils_1.getUserId(ctx);
        const where = {
            isPublished: false,
            author: {
                id
            }
        };
        return ctx.db.query.posts({ where }, info);
    },
    post(parent, { id }, ctx, info) {
        return ctx.db.query.post({ where: { id: id } }, info);
    },
    me(parent, args, ctx, info) {
        const id = utils_1.getUserId(ctx);
        return ctx.db.query.user({ where: { id } }, info);
    },
    userExist(parent, { email }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield ctx.db.exists.User({ email: email });
            if (user) {
                return true;
            }
            else {
                return false;
            }
        });
    },
    articles(parent, args, ctx, info) {
        return ctx.db.query.articles({}, info);
    },
    getDepartment(parent, { idInstitution }, ctx, info) {
        return ctx.db.query.departments({ where: {
                institution: {
                    id: idInstitution
                }
            } }, info);
    },
    getInstitution(parent, { idCountry }, ctx, info) {
        return ctx.db.query.institutionses({ where: {
                country: {
                    id: idCountry
                }
            } }, info);
    },
    getCountry(parent, args, ctx, info) {
        return ctx.db.query.countries({}, info);
    },
    allInterest(parent, args, ctx, info) {
        return ctx.db.query.interests({}, info);
    },
    getChannelChat(parent, args, ctx, info) {
        const id = utils_1.getUserId(ctx);
        return ctx.db.query.channelses({
            where: {
                participants_every: {
                    id
                },
                type: 'Channel'
            }
        }, info);
    },
    getDirectChat(parent, args, ctx, info) {
        const id = utils_1.getUserId(ctx);
        return ctx.db.query.channelses({
            where: {
                participants_every: {
                    id
                },
                type: 'Direct'
            }
        }, info);
    },
    getAllChat(parent, args, ctx, info) {
        const id = utils_1.getUserId(ctx);
        return ctx.db.query.channelses({
            where: {
                participants_every: {
                    id
                },
            }
        }, info);
    },
    getMessages(parent, { channelId }, ctx, info) {
        const id = utils_1.getUserId(ctx);
        return ctx.db.query.messages({
            where: {
                cahnnel: {
                    id: channelId
                }
            }
        }, info);
    },
};
//# sourceMappingURL=Query.js.map