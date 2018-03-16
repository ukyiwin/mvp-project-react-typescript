"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function truncString(value, add, max) {
    add = add || '...';
    return (value.length > max ? value.substring(0, max) + add : value);
}
exports.truncString = truncString;
function lengthInMinutes(value) {
    let min = value.split(' ').length / 250;
    if (min <= 0 || min === 0) {
        return 'less than a minute read';
    }
    else if (min <= 0.9 || min === 0.9) {
        return 'less than a minute read';
    }
    else {
        return `${min} min read`;
    }
}
exports.lengthInMinutes = lengthInMinutes;
//# sourceMappingURL=helper.js.map