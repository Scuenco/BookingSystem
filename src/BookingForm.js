import React, {useState} from "react";
import image from "./assets/restaurant.jpg";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [availableTimes, setAvailableTimes] = useState([
    { value: "11:00 am" },
    { value: "12:00 nn" },
    { value: "1:00 pm" },
    { value: "2:00 pm" },
    { value: "3:00 pm" },
    { value: "4:00 pm" },
    { value: "5:00 pm" },
    { value: "6:00 pm" },
    { value: "7:00 pm" },
    { value: "8:00 pm" }
  ])
  const [guests, setGuests] = useState();
  const [occassion, setOccassion] = useState();
  const [tableOption, setTableOption] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('select date: ', selectedDate);
    console.log('select time: ', selectedTime);
    console.log('select guests: ', guests);
    console.log('select occassion: ', occassion);
    console.log('select table option:', tableOption);
  }

  return (
    <>
    <section className="booking-header">
      <h1 className="booking-title">Reservations</h1>
      <div className="booking-image">
        <img src={image} alt="booking" />
      </div>
    </section>
    <form onSubmit={handleSubmit}>
      <section className="form-group">
          <div className="form-fields">
            <label className="form-label" htmlFor="res-date">Date</label>
            <input className="form-input" type="date" id="res-date" placeholder="Select date"
              value={selectedDate} onChange={e => setSelectedDate(e.target.value)}/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="res-time">Time</label>
            <select className="form-input" id="res-time "
              value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
              {availableTimes.map((time, key) => <option key={key} value={time.value}>{time.value}</option>)}
            </select>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="guests">Number of guests</label>
            <input className="form-input" type="number" placeholder="1" min="1" max="10" id="guests"
              value={guests} onChange={e => setGuests(e.target.value)}/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="occasion">Occasion</label>
            <select className="form-input" id="occasion" placeholder="Occasion"
              value={occassion} onChange={e => setOccassion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Others</option>
            </select>
          </div>
      </section>
      <span>Select table option</span>
      <section className="form-radio">
        <div>
          <input type="radio" id="table" name="option" value="Table"
            onChange={e => setTableOption(e.target.value)}/>
          <label htmlFor="table"for>Table</label>
        </div>
        <div>
          <input type="radio" id="booth" name="option" value="Booth"
            onChange={e => setTableOption(e.target.value)}/>
          <label htmlFor="booth"for>Booth</label>
        </div>
      </section>
      <section className="form-btn">
         <input type="submit" value="Continue" />
      </section>
    </form>
    </>
  )
}
export default BookingForm;