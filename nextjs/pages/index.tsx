import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>[DEMO] Neo4j and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Explore the{" "}
          <a href="https://neo4j.com" rel="noopener noreferrer" target="_blank">
            Neo4j
          </a>{" "}
          and{" "}
          <a
            href="https://nextjs.org"
            rel="noopener noreferrer"
            target="_blank"
          >
            Next.js
          </a>{" "}
          powered{" "}
          <Link href="/api/graphql">
            <a target="_blank">GraphQL API</a>
          </Link>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
