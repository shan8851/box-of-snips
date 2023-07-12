import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html data-theme='cyberpunk'>
      <Head>
        <meta property="og:title" content="Box Of Snips" />
        <meta property="og:description" content="Code Snippets" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:/box-of-snips.vercel.app" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
