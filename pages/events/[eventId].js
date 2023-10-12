import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import { Fragment } from 'react';
import EventLogistics from '../../Components/event-detail/event-logistics';
import EventSummary from '../../Components/event-detail/event-summary';
import EventContent from '../../Components/event-detail/event-content';

function EventDetailPage() {
  const router = useRouter();

  const eventid = router.query.eventId;
  const event = getEventById(eventid);

  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Event Found!</p>;
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  
  }

  return (
    <Fragment>
      <EventSummary title={event.title}></EventSummary>
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      ></EventLogistics>
      <EventContent>{event.description}</EventContent>
    </Fragment>
  );
}

export default EventDetailPage;
