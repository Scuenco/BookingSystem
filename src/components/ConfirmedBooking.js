import {useNavigate} from 'react-router-dom';

const ConfirmedBooking = ({isOpen, onClose, name}) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
    navigate('/');
  }

  return (
    <>
    <section className={`confirm-modal-overlay ${isOpen ? 'open' : ''}`}>
      <div className="confirm-modal-content">
        <h1>Success!</h1>
        <p><b>{name}</b>, we will soon send you an email confirmation regarding your reservation.</p>
        <p>Thank you for choosing Little Lemon!</p>
        <div>
          <input className='confirm-button' aria-label="On Click" onClick={handleSubmit} type="submit" value="Close" />
        </div>
      </div>
    </section>
    </>
  );
}

export default ConfirmedBooking;