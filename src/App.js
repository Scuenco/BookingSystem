import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

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
