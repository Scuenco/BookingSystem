import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import image from "../assets/restaurant chef B.jpg";
import ConfirmedBooking from "./ConfirmedBooking";

const BookingDetails = (props) => {
  const location = useLocation();
  const prevPage = location.state.formData;
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleBlur = (e) => {
    const {name, value} = e.target;
    validateField(name, value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(errors).every(value => value === undefined);
    if (isValid) {
      const mergedFormData = {...prevPage, ...formData};
      props.submitForm(mergedFormData);
      console.log("Submission was successful!");
    } else {
      console.log("Submission failed.");
    }
  }

  const validateField = (name, value) => {
    const fieldErrors = {};
    switch (name) {
      case 'fname': {
        if (!value) {
          fieldErrors.fname = "First name is required.";
        } else if (value.length < 2 ) {
          fieldErrors.fname = "The minimum length required is 2."
        } else if (value.length > 13) {
          fieldErrors.fname = "The maximum length required is 12."
        }
        setErrors({...errors, fname: fieldErrors.fname});
        break;
      }
      case 'lname': {
        if (!value) {
          fieldErrors.lname = "Last name is required.";
        } else if (value.length < 2 ) {
          fieldErrors.lname = "The minimum length required is 2."
        } else if (value.length > 13) {
          fieldErrors.lname = "The maximum length required is 12."
        }
        setErrors({...errors, lname: fieldErrors.lname});
        break;
      }
      case 'email': {
        if (!value) {
          fieldErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value) ) {
          fieldErrors.email = "Email is invalid."
        }
        setErrors({...errors, email: fieldErrors.email});
        break;
      }
      case 'phone': {
        if (!value) {
          fieldErrors.phone = "Phone no. is required.";
        } else if (value.length !== 10) {
          fieldErrors.phone = "Phone no. is invalid."
        }
        setErrors({...errors, phone: fieldErrors.phone});
        break;
      }
      default: {
      }
    }
    return fieldErrors;
  }

  return (
    <>
    <section className="bookingDetails-header" aria-label="booking header">
      <div className="booking-lead-text">
        <h1 className="booking-title">Little Lemon</h1>
        <h3 className="booking-subtitle">Reservations</h3>
        <div className="booking-prev">
          <span>Date:  {prevPage.date}</span><br/>
          <span>Time:  {prevPage.time}</span><br/>
          <span>Guests:  {prevPage.guests}</span><br/>
          <span>Occassion:  {prevPage.occassion}</span><br/>
          <span>Table option:  {prevPage.option}</span>
        </div>
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
              value={formData.fname} name="fname" onChange={handleChange}
              onBlur={handleBlur} required />
            {errors.fname && (<span className="error-message">{errors.fname}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="lastname">Last Name*</label>
            <input className="form-input" type="text" placeholder="Enter last name"
              value={formData.lname} onChange={handleChange} name="lname" id="lastname"
              onBlur={handleBlur} required minLength={2} maxLength={12}/>
            {errors.lname && (<span  className="error-message">{errors.lname}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="email">Email*</label>
            <input className="form-input" type="email" id="email" placeholder="Enter email"
              value={formData.email} onChange={handleChange} name="email" required
              onBlur={handleBlur} />
            {errors.email && (<span className="error-message">{errors.email}</span>)}
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="phone">Phone Number*</label>
            <input className="form-input" type="number" placeholder="Enter phone"
              value={formData.phone} onChange={handleChange} name="phone" required maxLength={10}
              onBlur={handleBlur} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone"/>
            {errors.phone && (<span className="error-message">{errors.phone}</span>)}
          </div>
      </section>
      <section className="form-btn" aria-label="submit reservation">
         <input type="submit" name="submit" value="Reserve a Table" data-testid="reserve"/>
      </section>
    </form>
    <ConfirmedBooking isOpen={props.isModalOpen} onClose={props.onClose} name={`${formData.fname} ${formData.lname}`}/>
    </>
  )
}

export default BookingDetails;