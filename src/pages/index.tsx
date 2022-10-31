import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../Components/Banner";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>food home</title>
        <link rel="icon" href="/plate.jpg" />
      </Head>

      <Navbar />
      <Banner/>
    </div>
  );
};

export default Home;
