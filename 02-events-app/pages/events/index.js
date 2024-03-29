import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../services/api-utils";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";

const AllEvents = (props) => {
  //const events = getAllEvents();
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
        />
      </Head>
      <EventSearch onSearch={findEventsHandler} />
      <EventList items={props.events} />
    </>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEvents;
