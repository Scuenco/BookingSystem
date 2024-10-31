import React, {useState, useReducer, useEffect} from "react";
import { Routes, Route } from 'react-router-dom';
import {fetchAPI, submitAPI} from '../api/mockApi';
import Homepage from './Homepage';
import BookingPage from "./BookingPage";
import BookingForm2 from "./BookingForm2";
import About from "./About";
import Menu from "./Menu";
import Order from "./Order";
import Login from "./Login";

const Main = () => {
  const [initializeTimes, setInitializeTimes] = useState(fetchAPI(new Date()));
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // reducer function
  function updateTimes( availableTimes, action ) {
    const persistentData = JSON.parse(localStorage.getItem(action.type));
    return (persistentData ? persistentData : fetchAPI(new Date(action.type)));
  };

  function submitForm(formData) {
    if (submitAPI(formData)) {
      let dateAPI = JSON.parse(localStorage.getItem(formData.date));
      if (dateAPI === null) {
        let updateAvailableTimes = availableTimes.filter(time => time !==  formData.time );
        localStorage.setItem(formData.date, JSON.stringify(updateAvailableTimes));
      }
      else {
        let updateAPI = dateAPI.filter(time => time !==  formData.time );
        localStorage.setItem(formData.date, JSON.stringify(updateAPI));
      }
      console.log('localStorage: ', localStorage); //
      setIsModalOpen(true);
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

  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/reservations" element={
        <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>}/>
      <Route path="/reservations/details" element={<BookingForm2 submitForm={submitForm}
        isModalOpen={isModalOpen} onClose={closeModal} />} />
      <Route path="/order" element={<Order/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
    </>
  )
}

export default Main;