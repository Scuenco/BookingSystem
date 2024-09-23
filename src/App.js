import './App.css';
import Homepage from './Homepage';
import Reservations from './Reservations';
import About from './About';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/menu" element={<Menu/>} /> */}
      <Route path="/reservations" element={<Reservations />} />
      {/* <Route path="/order" element={<Order />} /> */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
    </>
  );
}
export default App;
