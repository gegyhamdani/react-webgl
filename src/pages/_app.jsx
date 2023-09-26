import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ORCA | React with Unity</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
