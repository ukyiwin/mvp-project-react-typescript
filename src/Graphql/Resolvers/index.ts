
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

export default resolvers;