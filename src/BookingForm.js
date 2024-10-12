import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import image from "./assets/restaurant.jpg";

const BookingForm = (props) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(0);
  const [occassion, setOccassion] = useState('');
  const [tableOption, setTableOption] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reservations/details',
      { state: {selectedDate, selectedTime, guests, occassion, tableOption} });
    setSelectedDate('');
    setSelectedTime('');
    setGuests(0);
    setOccassion('');
    setTableOption('');
  };

  function handleSelectedDate(e) {
      setSelectedDate(e.target.value);
      props.dispatch({type: e.target.value});
  }

  return (
    <>
    <section className="booking-header" aria-label="booking header">
      <h1 className="booking-title">Reservations</h1>
      <div className="booking-image">
        <img src={image} alt="booking" />
      </div>
    </section>
    <form onSubmit={handleSubmit}>
      <section className="form-group" aria-label="booking specifications">
          <div className="form-fields">
            <label className="form-label" htmlFor="res-date">Date</label>
            <input className="form-input" type="date" id="res-date" placeholder="Select date"
              value={selectedDate} onChange={e => handleSelectedDate(e)} data-testid='select-date'/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="res-time">Time</label>
            <select data-testid='select-option' className="form-input" id="res-time"
              value={selectedTime} onChange={e => setSelectedTime(e.target.value)}><option>Select time</option>
              {props.availableTimes.map((time, key) =><option key={key} value={time}>{time}</option>)}
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
                <option></option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Graduation</option>
                <option>Others</option>
            </select>
          </div>
      </section>
      <span>Select table option</span>
      <section className="form-radio" aria-label="table options">
        <div>
          <input type="radio" id="table" name="option" value="Table"
            onChange={e => setTableOption(e.target.value)}/>
          <label htmlFor="table">Table</label>
        </div>
        <div>
          <input type="radio" id="booth" name="option" value="Booth"
            onChange={e => setTableOption(e.target.value)}/>
          <label htmlFor="booth">Booth</label>
        </div>
      </section>
      <section className="form-btn" aria-label="submit button">
         <input disabled={!selectedDate || !selectedTime || !guests} type="submit" value="Continue" />
      </section>
    </form>
    </>
  )
}
export default BookingForm;