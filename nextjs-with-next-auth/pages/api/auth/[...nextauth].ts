import NextAuth from 'next-auth';
import neo4j from 'neo4j-driver';
import { Neo4jAdapter } from '@next-auth/neo4j-adapter';
// import { Neo4jAdapter } from '../../../vendor/nextauthjs-adapters/packages/neo4j/src';
import TwitterProvider from 'next-auth/providers/twitter';
import GitHubProvider from 'next-auth/providers/github';

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

const neo4jSession = driver.session();

// console.log(neo4jSession);

let providers = [];

if (
  process.env.GITHUB_CLIENT_ID?.length &&
  process.env.GITHUB_CLIENT_SECRET?.length
) {
  providers.push(
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    })
  );
}
if (
  process.env.TWITTER_CLIENT_ID?.length &&
  process.env.TWITTER_CLIENT_SECRET?.length
) {
  providers.push(
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    })
  );
}

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers
  providers,
  adapter: Neo4jAdapter(neo4jSession),
});
