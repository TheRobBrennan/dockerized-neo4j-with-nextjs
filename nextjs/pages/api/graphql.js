import { gql, ApolloServer } from "apollo-server-micro"
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core"
import { Neo4jGraphQL } from "@neo4j/graphql"
import neo4j from "neo4j-driver"
import "ts-tiny-invariant" // importing this module as a workaround for issue described here: https://github.com/vercel/vercel/discussions/5846

const typeDefs = gql`
  # Custom GraphQL queries that will be handled by our custom resolvers can be defined here
  type Query {
    ping: Ping
  }

  type Ping {
    message: String
    timestamp: DateTime
  }

  type User {
    username: String
    created: DateTime @timestamp(operations: [CREATE])
  }
`

const resolvers = {
  Query: {
    ping: () => {
      return {
        message: "Pong",
        timestamp: new Date(),
      }
    },
  },
}

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
)

const neoSchema = new Neo4jGraphQL({ typeDefs, resolvers, driver })

const apolloServer = new ApolloServer({
  schema: neoSchema.schema,
  playground: true,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

const startServer = apolloServer.start()

export default async function handler(req, res) {
  await startServer
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}
