import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import image from "./assets/restaurant chef B.jpg";

const BookingDetails = (props) => {
  const location = useLocation();
  const prevFormData = location.state;

  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const mergedFormData = {...prevFormData, ...formData};
    props.submitForm(mergedFormData);
  }
  return (
    <>
    <section className="bookingDetails-header" aria-label="booking header">
      <div className="booking-lead-text">
        <h1 className="booking-title">Reservations</h1>
        <span>Date:  {prevFormData.selectedDate}</span><br/>
        <span>Time:  {prevFormData.selectedTime}</span><br/>
        <span>Guests:  {prevFormData.guests}</span><br/>
        <span>Occassion:  {prevFormData.occassion}</span><br/>
        <span>Table option:  {prevFormData.tableOption}</span>
      </div>
      <div className="booking-image">
        <img src={image} alt="booking" />
      </div>
    </section>
    <form onSubmit={handleSubmit}>
      <section className="form-group" aria-label="customer details">
          <div className="form-fields">
            <label className="form-label" htmlFor="firstname">First Name*</label>
            <input className="form-input" type="text" id="firstname" placeholder="Enter first name"
              value={formData.fname} onChange={handleChange} name="fname"/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="guests">Last Name*</label>
            <input className="form-input" type="text" placeholder="Enter last name"
              value={formData.lname} onChange={handleChange} name="lname"/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="email">Email*</label>
            <input className="form-input" type="email" id="email" placeholder="Enter email"
              value={formData.email} onChange={handleChange} name="email"/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="phone">Phone Number*</label>
            <input className="form-input" type="tel" placeholder="Enter phone"
              value={formData.phone} onChange={handleChange} name="phone"/>
          </div>
      </section>
      <section className="form-btn" aria-label="submit reservation">
         <input disabled={ !formData.fname || !formData.lname || !formData.email || !formData.phone } 
          type="submit" value="Reserve a Table"/>
      </section>
    </form>
    </>
  )
}
export default BookingDetails;