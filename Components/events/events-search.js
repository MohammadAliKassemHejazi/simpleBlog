import Button from '../ui/Button';
import classes from './events-serch.module.css';
import { useRef } from 'react';
function EventsSearch(props) {
  const yearInputRef = useRef();
  const monthInoutRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInoutRef.current.value;

    props.onSearch(selectedYear, selectedMonth);
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <lable htmlFor="year"></lable>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option>2023</option>
          </select>
        </div>
        <div className={classes.control}>
          <lable htmlFor="month"></lable>
          <select id="month" ref={monthInoutRef}>
            <option value="1">Jan</option>
            <option value="2">Feb</option>
            <option value="3">Mar</option>
            <option value="4">Apr</option>
            <option value="5">May</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Aug</option>
            <option value="9">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
        </div>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventsSearch;