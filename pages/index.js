import Head from 'next/head';
import EventList from '../Components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <Head>
  
        <title>Featured Events - Event Management App</title>
        <meta
          name="description"
          content="Check out the latest featured events on our platform."
        />
        <meta name="keywords" content="featured events, latest events" />
      </Head>
      <EventList items={featuredEvents} />
    </>
  );
}

export default HomePage;
