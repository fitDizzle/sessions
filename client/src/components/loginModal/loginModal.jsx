import React, { useState, useEffect } from 'react';
import userAPI from '../../api/userAPI.js';
import Modal from '../modal/modal.jsx';

const LoginModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onLogin = () => {
    return userAPI.getUser(formData).then((res) => {
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

  return (
    <div>
      <button onClick={() => setShow(true)}>Login</button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container" onClick={(e) => handleOffModalClick(e)}>
          <h1 data-testid="modal-heading">Log in</h1>

          <div className="input-container">
            <label>Email</label>
            <input type="email" name="email" placeholder="enter your email" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Password</label>
            <input type="password" name="password" placeholder="enter your password" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onLogin()}>submit</button>
          </div>

        </div>
      </Modal>
    </div>
  );
};

export default LoginModal;