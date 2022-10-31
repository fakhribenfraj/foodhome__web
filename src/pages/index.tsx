import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>food home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
    </div>
  );
};

export default Home;
