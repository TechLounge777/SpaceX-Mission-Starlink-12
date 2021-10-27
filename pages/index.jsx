import Head from "next/head";
import Image from "next/image";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import Navbar from "../components/Navbar/Navbar";
import MissionStarlinkSection from "../components/MissionStarlinkSection/MissionStarlinkSection";
import RescueShips from "../components/RescueShips/RescueShips";

export default function Home({ launchesPast }) {
  console.log(launchesPast);
  const starlink12 = launchesPast.find(
    (obj) => obj.mission_name == "Starlink-12 (v1.0)"
  );
  console.log(starlink12);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="SpaceX Mission Starlink-12" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon-spacex.svg"
          sizes="any"
        />
      </Head>
      <Navbar />
      <main>
        <MissionStarlinkSection starlink12={starlink12} />
        <RescueShips starlink12={starlink12} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        launchesPast(limit: 10) {
          mission_name
          launch_date_local
          launch_site {
            site_name_long
            site_id
            site_name
          }
          links {
            article_link
            video_link
          }
          rocket {
            rocket_name
            first_stage {
              cores {
                flight
                core {
                  reuse_count
                  status
                }
              }
            }
            second_stage {
              payloads {
                payload_type
                payload_mass_kg
                payload_mass_lbs
              }
            }
          }
          ships {
            name
            home_port
            image
            weight_kg
          }
        }
      }
    `,
  });
  const { launchesPast } = data;

  console.log(launchesPast);
  return {
    props: {
      launchesPast,
    },
  };
}
