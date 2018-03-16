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
exports.user = {
    // tslint:disable-next-line:typedef
    addProfile(parent, { photoId, countryId, institutionId, departmentId }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            return ctx.db.mutation.updateUser({
                where: {
                    id: userId
                },
                data: {
                    avatar: {
                        connect: {
                            id: photoId
                        }
                    },
                    country: {
                        connect: {
                            id: countryId
                        }
                    },
                    institution: {
                        connect: {
                            id: institutionId
                        }
                    },
                    department: {
                        connect: {
                            id: departmentId
                        }
                    },
                    completedProfile: 2
                }
            }, info);
        });
    },
    // tslint:disable-next-line:typedef
    addInterest(parent, { interests }, ctx, info) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = utils_1.getUserId(ctx);
            let temp = [];
            // tslint:disable-next-line:no-console
            console.log('====================================');
            // tslint:disable-next-line:no-console
            console.log(interests);
            // tslint:disable-next-line:no-console
            console.log('====================================');
            // tslint:disable-next-line:no-shadowed-variable
            interests.map(interest => {
                if (interest !== '1') {
                    let tmp = { id: interest };
                    temp.push(tmp);
                }
            });
            return ctx.db.mutation.updateUser({
                where: {
                    id: userId
                },
                data: {
                    completedProfile: 3,
                    interest: {
                        connect: [...temp]
                    }
                }
            }, info);
        });
    },
};
//# sourceMappingURL=user.js.map