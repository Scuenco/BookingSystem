import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import image from "../assets/restaurant.jpg";

const BookingForm = (props) => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 0,
    occassion: '',
    option: ''
  })
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/reservations/details', { state: {formData}});
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
    if (name === 'date') {
      props.dispatch({type: value});
    }
    validateField(name, value);
  }

 const getIsFormValid = () => {
  const selectedDate = (new Date(formData.date.replace(/-/g, '/'))).toLocaleDateString().split('T')[0];
  const today = new Date(new Date().setHours(0,0,0)).toLocaleDateString().split('T')[0];
  return (
    formData.date !== '' &&
    (selectedDate > today || selectedDate === today) &&
    formData.time &&
    formData.guests > 0
  )
 }

 const validateField = (name, value) => {
  const fieldErrors = {};
  switch (name){
    case 'date': {
      const selectedDate = (new Date(value.replace(/-/g, '/'))).toISOString().split('T')[0];
      const today = new Date(new Date().setHours(0,0,0)).toISOString().split('T')[0];
      if (selectedDate < today) {
        fieldErrors.date = "Invalid date. Please select a valid date."
      }
      setErrors({...errors, date: fieldErrors.date});
      break;
    }
    case 'time': {
      if (value==='') {
        fieldErrors.time = "Invalid time. Please select a valid time."
      }
      setErrors({...errors, time: fieldErrors.time});
      break;
    }
    case 'guests': {
      if (Number(value)===0) {
        fieldErrors.guests = "Guests must be 1 or more."
      }
      setErrors({...errors, guests: fieldErrors.guests});
      break;
    }
    default: {
    }
  }
  return fieldErrors;
 }

  return (
    <>
    <section className="booking-header" aria-label="booking header">
      <div>
        <h1 className="booking-title">Little Lemon</h1>
        <h3 className="booking-subtitle">Reservations</h3>
      </div>
      <div className="booking-image">
        <img src={image} alt="booking" />
      </div>
    </section>
    <form onSubmit={handleSubmit}>
      <section className="form-group" aria-label="booking specifications">
          <div className="form-fields">
            <label className="form-label" htmlFor="res-date">Date*</label>
            <input className="form-input" type="date" name="date" id="res-date" placeholder="Select date" required
              value={formData.date} onChange={handleChange} data-testid='select-date' utcoffset={0}/>
              {errors.date && (<span className="error-message">{errors.date}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="res-time">Time*</label>
            <select data-testid='select-option' className="form-input" name="time" id="res-time" required
              value={formData.time} onChange={handleChange}><option></option>
              {props.availableTimes.map((time, key) =><option key={key} value={time}>{time}</option>)}
            </select>
            {errors.time && (<span className="error-message">{errors.time}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="guests">Number of guests*</label>
            <input className="form-input" type="number" placeholder="1" min="0" max="10" id="guests"
              value={formData.guests} onChange={handleChange} name="guests" required/>
            {errors.guests && (<span className="error-message">{errors.guests}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="occasion">Occasion</label>
            <select className="form-input" id="occasion" placeholder="Occasion" name="occassion"
              value={formData.occassion} onChange={handleChange}>
                <option>None</option>
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
            onChange={handleChange}/>
          <label htmlFor="table">Table</label>
        </div>
        <div>
          <input type="radio" id="booth" name="option" value="Booth"
            onChange={handleChange}/>
          <label htmlFor="booth">Booth</label>
        </div>
      </section>
      <section className="form-btn" aria-label="submit button">
        <input disabled={!getIsFormValid()} type="submit" value="Continue" />
      </section>
    </form>
    </>
  )
}
export default BookingForm;