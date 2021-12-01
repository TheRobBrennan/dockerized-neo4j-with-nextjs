import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { gql } from '@apollo/client';
import client from '../apollo/client';

import styles from '../styles/Home.module.css';

import { SignInOut } from '../components/SignInOut';
import { UserList } from '../components/UserList';

export default function Home({ users }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>[DEMO] Neo4j and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div>
          <SignInOut styles={styles} />
        </div>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Explore the{' '}
          <a href="https://neo4j.com" rel="noopener noreferrer" target="_blank">
            Neo4j
          </a>{' '}
          and{' '}
          <a
            href="https://nextjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>{' '}
          powered{' '}
          <Link href="/api/graphql">
            <a target="_blank">GraphQL API</a>
          </Link>{' '}
          <br />
          With{' '}
          <Link href="https://next-auth.js.org">
            <a target="_blank">NextAuth.js</a>
          </Link>
        </h1>
        <UserList className={styles.users} users={users} />
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
          id
          name
          accounts {
            provider
          }
        }
      }
    `,
  });

  return {
    props: {
      users: data.users,
    },
  };
}
