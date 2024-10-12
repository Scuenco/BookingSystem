import React, {useState, useReducer, useEffect} from "react";
import Homepage from './Homepage';
import BookingPage from "./BookingPage";
import {fetchAPI, submitAPI} from './mockApi';
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingDetails from "./BookingDetails";

const Main = () => {
  const [initializeTimes, setInitializeTimes] = useState(fetchAPI(new Date()));
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const navigate = useNavigate();

  // reducer function
  function updateTimes( availableTimes, action ) {
    const persistentData = JSON.parse(localStorage.getItem(action.type));
    return (persistentData ? persistentData : fetchAPI(new Date(action.type)));
  };

  function submitForm(formData) {
    if (submitAPI(formData)) {
      let dateAPI = JSON.parse(localStorage.getItem(formData.selectedDate));
      if (dateAPI === null) {
        let updateAvailableTimes = availableTimes.filter(time => time !==  formData.selectedTime );
        localStorage.setItem(formData.selectedDate, JSON.stringify(updateAvailableTimes));
      }
      else {
        let updateAPI = dateAPI.filter(time => time !==  formData.selectedTime );
        localStorage.setItem(formData.selectedDate, JSON.stringify(updateAPI));
      }
      console.log(localStorage);
      const fullname = `${formData.fname} ${formData.lname}`;
      navigate('/reservations/confirm-booking', {state: {fullname}});
    }
    return;
  }

  useEffect((formData) => {
    if (formData) {
      submitForm(formData);
    }
    const cleanup = (event) => {
      localStorage.clear();
      event.preventDefault(); // Prevents immediate closing
      event.returnValue = ''; // Required to show prompt in some browsers
      return ''; // Required to show prompt in some browsers
    };
    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
    }
  }, []);

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reservations" element={
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
      <Route path="/reservations/details" element={<BookingDetails submitForm={submitForm}/>} />
      <Route path="/reservations/confirm-booking" element={<ConfirmedBooking />} />
    </Routes>
    </>
  )
}

export default Main;