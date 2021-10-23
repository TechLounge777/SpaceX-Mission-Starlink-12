import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import MissionStarlinkSection from "../components/MissionStarlinkSection/MissionStarlinkSection";
import RescueShips from "../components/RescueShips/RescueShips";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="SpaceX Mission Starlink-12 Next.js app"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon-spacex.svg"
          sizes="any"
        />
      </Head>
      <Navbar />
      <main>
        <MissionStarlinkSection />
        <RescueShips />
      </main>
    </div>
  );
}
