import React, { useState } from "react";
import image from "./assets/restaurant chef B.jpg";

const BookingDetails = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFname('');
    setLname('');
    setEmail('');
    setPhone('');
    console.log("fname: ", fname);
    console.log("lname: ", lname);
    console.log("email: ", email);
    console.log("phone: ", phone);
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
            <label className="form-label" htmlFor="firstname">First Name*</label>
            <input className="form-input" type="text" id="firstname" placeholder="Enter first name"
              value={fname} onChange={e => setFname(e.target.value)}/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="guests">Last Name*</label>
            <input className="form-input" type="text" placeholder="Enter last name"
              value={lname} onChange={e => setLname(e.target.value)}/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="email">Email*</label>
            <input className="form-input" type="email" id="email" placeholder="Enter email"
              value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
          <div className="form-fields">
            <label className="form-label" htmlFor="phone">Phone Number*</label>
            <input className="form-input" type="tel" placeholder="Enter phone"
              value={phone} onChange={e => setPhone(e.target.value)}/>
          </div>
      </section>
      <section className="form-btn">
         <input type="submit" value="Reserve a Table" />
      </section>
    </form>
    </>
  )
}
export default BookingDetails;