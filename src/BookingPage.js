import React from "react";
import Header from "./Header";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import BookingDetails from "./BookingDetails";

const BookingPage = () => {
  return (
    <>
      <Header />
      <BookingForm />
      <BookingDetails />
      <Footer />
    </>
  )
}

export default BookingPage;