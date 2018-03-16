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
exports.article = {
    // tslint:disable-next-line:typedef
    createArticle(parent, { title, body, tags, category }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            let temp = [];
            // tslint:disable-next-line:no-shadowed-variable
            category.map(interest => {
                if (interest !== '1') {
                    let tmp = { id: interest };
                    temp.push(tmp);
                }
            });
            return ctx.db.mutation.createArticle({
                data: {
                    author: {
                        connect: {
                            id: userId
                        }
                    },
                    body: body,
                    title: title,
                    category: {
                        connect: [...temp]
                    },
                    tags: tags,
                    type: 'Internal',
                    isPublished: true
                }
            }, info);
        });
    },
    // tslint:disable-next-line:typedef
    publishArticle(parent, { id }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            return ctx.db.mutation.updateArticle({
                where: {
                    id: id
                },
                data: {
                    isPublished: true
                }
            }, info);
        });
    },
};
//# sourceMappingURL=article.js.map