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
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.auth = {
    signup(parent, args, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const password = yield bcrypt.hash(args.password, 10);
            const user = yield ctx.db.mutation.createUser({
                data: Object.assign({}, args, { password }),
            });
            return {
                token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
                user,
            };
        });
    },
    login(parent, { email, password }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield ctx.db.query.user({ where: { email } });
            if (!user) {
                throw new Error(`No such user found for email: ${email}`);
            }
            const valid = yield bcrypt.compare(password, user.password);
            if (!valid) {
                throw new Error('Invalid password');
            }
            return {
                token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
                user,
            };
        });
    },
};
//# sourceMappingURL=auth.js.map