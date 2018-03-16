"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function control(isProd, days) {
    if (days === 0 || !isProd) {
        return 'public, no-cache, no-store, must-revalidate';
    }
    const sec = days * 24 * 60 * 60;
    return `public, max-age=${sec}`;
}
exports.control = control;
//# sourceMappingURL=cache-control.js.map