"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Mutation: {
        updateNetworkStatus: (_, { isConnected }, { cache }) => {
            const data = {
                networkStatus: { isConnected },
            };
            cache.writeData({ data });
        },
    }
};
exports.default = resolvers;
//# sourceMappingURL=index.js.map