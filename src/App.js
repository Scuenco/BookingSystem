import './App.css';
import Homepage from './Homepage';
import About from './About';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';
import Header from './Header';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import Footer from './Footer';

function App() {
  return (
    <>
    {/* <Routes> */}
      {/* <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} /> */}
      {/* <Route path="/menu" element={<Menu/>} /> */}
      {/* <Route path="/reservations" element={<BookingPage />} /> */}
      {/* <Route path="/order" element={<Order />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    {/* </Routes> */}
    <Header/>
    <Main />
    <Footer />
    </>
  );
}
export default App;
