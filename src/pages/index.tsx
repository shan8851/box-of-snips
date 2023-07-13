import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { Header } from "~/components/header";
import { api } from "~/utils/api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Box Of Snips</title>
        <meta name="description" content="Snippets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className="mx-5 mt-5 grid grid-cols-4 gap-2">
          <div className="px-2">side</div>
          <div className="col-span-3">main</div>
        </div>
      </main>
    </>
  );
}


