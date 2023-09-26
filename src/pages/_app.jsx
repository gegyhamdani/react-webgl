import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ORCA | Unity on React</title>
        <meta
          content="width=device-width, initial-scale=1, maximum-scale=5"
          name="viewport"
        />
        <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
        <meta content="id" name="language" />
        <meta content="id" name="geo.country" />
        <meta content="Indonesia" name="geo.placename" />

        <meta content="ORCA | Unity on React" key="title" name="title"/>
        <meta
          content="Create your own React app with Unity as the game engine"
          name="description"
        />
        <meta content="react, next, unity, engine" name="keywords" />
        <meta content="ORCA | Unity on React" name="author" />

        <meta content="website" key="ogType" property="og:type" />
        <meta content="ORCA | Unity on React" key="ogTitle" property="og:title" />
        <meta content="ORCA | Unity on React" key="ogSiteName" property="og:site_name" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
