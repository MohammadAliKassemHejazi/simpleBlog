import { Fragment } from "react";
import EventList from "../../Components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../Components/events/events-search";
import {useRouter} from 'next/router'
function AllEevntsPage() {
  
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullpath = `/events/${year}/${month}`
    router.push(fullpath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler}></EventsSearch>
      <EventList items={events}></EventList>
    </Fragment>
  );
}

export default AllEevntsPage;
