import { ApolloServer } from "apollo-server-micro"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { neoSchema } from "../../graphql"

export const apolloServer = new ApolloServer({
  schema: neoSchema.schema,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})
