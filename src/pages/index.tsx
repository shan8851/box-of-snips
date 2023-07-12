import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Box Of Snips</title>
        <meta name="description" content="Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Box Of Snips</h1>
              <p className="py-6">
                Snippets on demand
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
