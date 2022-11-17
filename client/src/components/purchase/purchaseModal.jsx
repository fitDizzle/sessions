import React, { useState, useEffect } from 'react';
import Modal from '../modal/modal.jsx';

const PurchaseModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOffModalClick = (e) => {
    if (show) {
      if (e.target.id === 'modal') {
        setShow(false);
      }
    }
  };


  const modalBtnStyle = {
    background: 'transparent',
    border: 'none',
    color: 'rgb(230, 177, 126)',
    cursor: 'pointer',
    height: '50px',
    fontSize: '16px'
  };

  return (
    <div>
      <button className="btn" onClick={() => setShow(true)}>Purchase</button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container" onClick={(e) => handleOffModalClick(e)}>
          <h1 data-testid="modal-heading">Checkout</h1>

          <div className="input-container">
            <label>First name</label>
            <input type="text" name="firstName" placeholder="enter your first name" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Last name</label>
            <input type="text" name="lastName" placeholder="enter your last name" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Card Number</label>
            <input type="text" name="cardNumber" placeholder="enter your card number" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Expiration Date</label>
            <input type="text" name="expire" placeholder="enter your city" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Security Code</label>
            <input type="text" name="code" placeholder="enter your three digit security code" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Zip code</label>
            <input type="text" name="zipCode" placeholder="enter your zipcode" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="modal-footer">
            <button style={modalBtnStyle} onClick={() => setShow(false)}>cancel</button>
            <button style={{ ...modalBtnStyle, marginLeft: '16px' }} onClick={() => onSignUp()}>submit</button>
          </div>

        </div>
      </Modal >
    </div >
  );
};

export default PurchaseModal;