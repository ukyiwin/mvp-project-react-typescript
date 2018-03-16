"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_decode_1 = require("jwt-decode");
function getTokenExpirationDate(token) {
    const decoded = jwt_decode_1.default(token);
    if (!decoded.exp) {
        return null;
    }
    const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
    date.setUTCSeconds(decoded.exp);
    return date;
}
exports.getTokenExpirationDate = getTokenExpirationDate;
function isTokenExpired(token) {
    const date = getTokenExpirationDate(token);
    const offsetSeconds = 0;
    if (date === null) {
        return false;
    }
    return !(date.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)));
}
exports.isTokenExpired = isTokenExpired;
//# sourceMappingURL=jwtHelper.js.map