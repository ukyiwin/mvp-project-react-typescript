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
const uuid_1 = require("uuid");
const mime = require("mime-types");
const multiparty = require("multiparty");
const azure = require('azure');
const azureStorage = require('azure-storage');
exports.default = ({ prisma }) => (req, res) => {
    let form = new multiparty.Form();
    let blobService = azure.createBlobService();
    var startDate = new Date();
    var expiryDate = new Date(startDate);
    expiryDate.setMinutes(startDate.getMinutes() + 100);
    startDate.setMinutes(startDate.getMinutes() - 100);
    var sharedAccessPolicy = {
        AccessPolicy: {
            Permissions: azureStorage.BlobUtilities.SharedAccessPermissions.READ,
            Start: startDate,
            Expiry: expiryDate
        }
    };
    // tslint:disable-next-line:no-any
    form.on('part', function (part) {
        return __awaiter(this, void 0, void 0, function* () {
            if (part.name !== 'data') {
                return;
            }
            const secret = uuid_1.v4();
            const name = `${secret}_${part.filename}`;
            const size = part.byteCount;
            const contentType = mime.lookup(part.filename);
            const container = 'unizonn';
            // tslint:disable-next-line:no-console
            blobService.createBlockBlobFromStream(
            // tslint:disable-next-line:typedef
            container, name, part, size, function (error, result, response) {
                return __awaiter(this, void 0, void 0, function* () {
                    if (error) {
                        // tslint:disable-next-line:no-console
                        console.log('errror');
                    }
                    else {
                        const token = blobService.generateSharedAccessSignature(container, result.name, sharedAccessPolicy);
                        const url = blobService.getUrl(container, result.name, token);
                        try {
                            const data = {
                                name,
                                size,
                                secret,
                                contentType,
                                url,
                            };
                            const { id } = yield prisma.mutation.createFile({ data }, ` { id } `);
                            const file = {
                                id,
                                name,
                                secret,
                                contentType,
                                size,
                                url,
                            };
                            return res.status(200).send(file);
                        }
                        catch (err) {
                            // tslint:disable-next-line:no-console
                            console.log(err);
                            return res.sendStatus(500);
                        }
                    }
                });
            });
        });
    });
    form.on('error', err => {
        // tslint:disable-next-line:no-console
        console.log(err);
        return res.sendStatus(500);
    });
    form.parse(req);
};
//# sourceMappingURL=fileApi.js.map