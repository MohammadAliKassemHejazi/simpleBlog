import classes from './event-item.module.css';
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRight from '../icons/arrow-right-icon';
function Eventitem(props) {
  const { title, image, date, location, id } = props;

  const humanReadaleDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formatedAddress = location.replace(', ', '\n');
  const extractedLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img className={classes.image} src={'/' + image} alt={title} />
      <div className={classes.content}>
        <div>
          <div className={classes.summary}>
            <h2>{title}</h2>
          </div>

          <div className={classes.date}>
            <DateIcon></DateIcon>
            <time>{humanReadaleDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon></AddressIcon>
            <address>{formatedAddress}</address>
          </div>
        </div>

        <div className={classes.actions}>
          <Button Link={extractedLink}>
            <span>Export events</span>
            <span className={classes.icon}>
              <ArrowRight></ArrowRight>
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default Eventitem;
