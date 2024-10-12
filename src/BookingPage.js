import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = (props) => {
  return (
    <>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch}
        submitForm={props.submitForm}/>
    </>
  )
}

export default BookingPage;