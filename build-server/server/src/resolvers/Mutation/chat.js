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
exports.chat = {
    // tslint:disable-next-line:typedef
    createChannel(parent, { name }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            return ctx.db.mutation.createChannels({
                data: {
                    author: {
                        connect: {
                            id: userId
                        }
                    },
                    title: name,
                    participants: {
                        connect: {
                            id: userId
                        }
                    },
                    type: 'Channel'
                }
            }, info);
        });
    },
    // tslint:disable-next-line:typedef
    createDirect(parent, { userId }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = utils_1.getUserId(ctx);
            const chatName = id + '_' + userId;
            return ctx.db.mutation.createChannels({
                data: {
                    author: {
                        connect: {
                            id: userId
                        }
                    },
                    participants: {
                        connect: [{
                                id
                            }, {
                                id: userId
                            }]
                    },
                    title: chatName,
                    type: 'Direct'
                }
            }, info);
        });
    },
};
//# sourceMappingURL=chat.js.map