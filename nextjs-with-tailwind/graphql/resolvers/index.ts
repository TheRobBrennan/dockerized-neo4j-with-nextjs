export const resolvers = {
  Query: {
    ping: () => {
      return {
        message: "Pong",
        timestamp: new Date(),
      }
    },
  },
}
