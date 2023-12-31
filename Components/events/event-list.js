import Eventitem from './event-item';
import classes from './event-list.module.css';
function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        
        <Eventitem
          key={event.id}
          id={event.id}
          location={event.location}
          title={event.title}
          date={event.date}
          image={event.image}
        ></Eventitem>
      ))}
    </ul>
  );
}

export default EventList;
