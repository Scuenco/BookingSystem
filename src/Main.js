import React, {useState, useReducer} from "react";
import Hero from './Hero';
import Specials from './Specials';
import BookingForm from "./BookingForm";

const Main = () => {
  // reducer function
  function updateTimes( availableTimes, action ) {
    switch (action.type) {
      case '2024-10-03': {
        console.log('action.type: ', action.type);
        return [...availableTimes];
      }
      case '2024-10-04': {
        return [...availableTimes];
      }
      case '2024-10-05': {
        return [...availableTimes];
      }
      default: {
        return [...availableTimes];
      }
    }
  };

  //create the initial state for the availableTimes.
  const initializeTimes = [
    { value: "11:00 am" },
    { value: "12:00 nn" },
    { value: "6:00 pm" },
    { value: "7:00 pm" },
    { value: "8:00 pm" }
  ]

  // change availableTimes from useState to a reducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <>
      {/* <Hero />
      <Specials /> */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch}/>
    </>
  )
}
export default Main;