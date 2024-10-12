import {useLocation, useNavigate} from 'react-router-dom';

const ConfirmedBooking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state;

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <>
    <div className="confirm-modal-overlay">
      <div className="confirm-modal-content">
        <h1>Success!</h1>
        <p><b>{ formData.fullname }</b>, we will soon send you an email confirmation regarding your reservation.</p>
        <p>Thank you for choosing Little Lemon!</p>
        <div>
          <button className='confirm-button' onClick={handleSubmit} type="submit">Close</button>
        </div>
      </div>
    </div>
    </>
  );
}

export default ConfirmedBooking;