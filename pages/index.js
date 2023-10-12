
import EventList from '../Components/events/event-list';
import { getFeaturedEvents } from '../dummy-data';

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
   
      <EventList items={featuredEvents}></EventList>

  );
}

export default HomePage;
