import { gql } from 'apollo-server-micro';

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
    name: String
    created: DateTime @timestamp(operations: [CREATE])
    accounts: [Account!]! @relationship(type: "HAS_ACCOUNT", direction: OUT)
  }

  type Account {
    provider: String
    user: [User!]! @relationship(type: "HAS_ACCOUNT", direction: IN)
  }
`;
