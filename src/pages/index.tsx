import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Banner from "../Components/Banner";
import { SmallCard, MediumCard } from "../Components/Card";
import Navbar from "../Components/Navbar";

const Home: NextPage = ({ exploreData, cardsData }: any) => {
  return (
    <div>
      <Head>
        <title>food home</title>
        <link rel="icon" href="/plate.jpg" />
      </Head>

      <Navbar />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }: any) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }: any) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const exploreData = await fetch(
    "https://635e5e2003d2d4d47aed2843.mockapi.io/api/v1/locations"
  ).then((res) => res.json());

  const cardsData = await fetch("https://635e5e2003d2d4d47aed2843.mockapi.io/api/v1/places").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};
export default Home;
