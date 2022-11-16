import React, { useState, useEffect } from 'react';
import Modal from '../modal/modal.jsx';

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSignUp = () => {
    API.createAnswer(props.questionId, formData).then((res) => {
      setShow(false);
    }).catch((err) => console.log('Error submitting answer in container component'));
  };

  const handleOffModalClick = (e) => {
    if (show) {
      if (e.target.id === 'modal') {
        setShow(false);
      }
    }
  };


  const ModalBtnStyles = {
    background: 'transparent',
    border: 'none',
    fontSize: '1.4em',
    color: 'rgb(230, 177, 126)'
  }

  return (
    <div>
      <button style={ModalBtnStyles} onClick={() => setShow(true)}>Login</button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container" onClick={(e) => handleOffModalClick(e)}>
          <h1 data-testid="modal-heading">Sign up</h1>

          <div className="input-container">
            <label>First name</label>
            <input type="text" name="firstName" placeholder="enter your first name" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Last name</label>
            <input type="text" name="lastName" placeholder="enter your last name" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Email</label>
            <input type="email" name="email" placeholder="enter your email" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>City</label>
            <input type="text" name="city" placeholder="enter your city" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>State</label>
            <input type="text" name="state" placeholder="enter your state" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Zip code</label>
            <input type="text" name="zipCode" placeholder="enter your zipcode" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input type="password" name="password" placeholder="enter your password" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Retype Password</label>
            <input type="password" name="passwordCheck" placeholder="enter your password again" onChange={(e) => onInputChange(e)} />
          </div>


          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onSignUp()}>submit</button>
          </div>

        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;