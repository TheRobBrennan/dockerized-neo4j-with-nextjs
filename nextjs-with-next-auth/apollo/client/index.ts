import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // It's ok for api url to be relative in browser.
  uri: `${typeof window === 'undefined' ? 'http://localhost:3002' : ''
    }/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
