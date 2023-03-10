import App from "../components/app";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Weather App | THE BEST</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App />
    </>
  );
}
