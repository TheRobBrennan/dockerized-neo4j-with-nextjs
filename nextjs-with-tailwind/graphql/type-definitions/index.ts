import { gql } from "apollo-server-micro"

export const typeDefs = gql`
  # Custom GraphQL queries that will be handled by our custom resolvers can be defined here
  type Query {
    ping: Ping
  }

  type Ping {
    message: String
    timestamp: DateTime
  }

  type User {
    id: ID! @id
    username: String
    created: DateTime @timestamp(operations: [CREATE])
  }
`
