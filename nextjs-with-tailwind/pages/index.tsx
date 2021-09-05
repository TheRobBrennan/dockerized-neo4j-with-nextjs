import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Head>
        <title>[DEMO] Neo4j and Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                Explore the{" "}
                <a
                  href="https://neo4j.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
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
              </p>
              <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
                <a
                  href="https://tailwindcss.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Tailwind CSS
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="mt-8 text-center text-base text-gray-400">
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
