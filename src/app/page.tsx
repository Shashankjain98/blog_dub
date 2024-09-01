import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/next.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js 14</title>
      </Head>
      <div id="root"></div>
    </>
  );
}
