import Head from "next/head";

import { getFeaturedEvents } from "../services/dummy-events-data";
import EventList from "../components/events/event-list";

//import styles from "../styles/Home.module.css";

const Home = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
      </Head>
      <EventList items={featureEvents} />
    </div>
  );
};

export default Home;
