import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../Components/events/event-list";
import ResultsTitle from "../../Components/results-title/results-title";
import { Fragment } from "react";
import Button from "../../Components/ui/Button";
import ErrorAlert from "../../Components/error-alert/error-alert";

function FilterEventPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return  <p className="center">loading....</p>;
  }

  const filterYear = filterData[0];
  const filterMonth = filterData[1];

  const numYear = +filterYear;
  const nummonth = +filterMonth;

  if (
    isNaN(numYear) ||
    isNaN(nummonth) ||
    numYear > 2023 ||
    numYear < 2021 ||
    nummonth < 1 ||
    nummonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter Please Adjust the values</p>;
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: nummonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No Events Found For the Filter Selected</p>
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, nummonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date}></ResultsTitle>
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
}

export default FilterEventPage;
