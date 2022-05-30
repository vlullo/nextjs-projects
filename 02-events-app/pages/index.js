
import { getFeaturedEvents } from "../services/dummy-events-data";
import EventList from '../components/events/event-list'
//import styles from "../styles/Home.module.css";

const Home = () => {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
};

export default Home;
