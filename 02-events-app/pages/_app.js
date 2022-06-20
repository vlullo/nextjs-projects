import Head from "next/head";

import Layout from "../components/layout";
import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Head>
        <title>Next Events</title>
        <meta name="description" content="NextJS Events" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
