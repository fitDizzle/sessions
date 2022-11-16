import React, { useState, useEffect } from 'react';
import Modal from '../modal/modal.jsx';

const CreateListingModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const onCreateListing = () => {
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

  return (
    <div>
      <button onClick={() => setShow(true)}>Create Listing</button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container" onClick={(e) => handleOffModalClick(e)}>
          <h1 data-testid="modal-heading">Create Listing</h1>

          <div className="input-container">
            <label>What is the name of the gym?</label>
            <input type="text" name="firstName" placeholder="enter the name of the gym where the sessions were purchased" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Please enter the address of the gyms location.</label>
            <input type="address" name="address" placeholder="enter the gyms location" onChange={(e) => onInputChange(e)} />

            <label>State</label>
            <input type="text" name="state" placeholder="enter your state" onChange={(e) => onInputChange(e)} />

            <label>Zip code</label>
            <input type="text" name="zipCode" placeholder="enter your zipcode" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Number of sessions</label>
            <input type="text" name="sessions" placeholder="enter the number of sessions you are listing" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Rate per session</label>
            <input type="cost" name="cost" placeholder="enter what price you'd like to list the sessions for (per session)." onChange={(e) => onInputChange(e)} />
          </div>

          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onCreateListing()}>submit</button>
          </div>

        </div>
      </Modal>
    </div>
  );
};

export default CreateListingModal;