import React, { useState, useEffect } from 'react';
import Modal from '../modal/modal.jsx';
import ListingAPI from '../../api/listingAPI.js';

const CreateListingModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData)
  };

  const onCreateListing = () => {
    ListingAPI.createListing(formData).then((res) => {
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

  const constainerStyles = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div>
      <button onClick={() => setShow(true)}>Create Listing</button>
      <Modal show={show} onClose={() => setShow(false)}>
        <div className="modal-content-container" onClick={(e) => handleOffModalClick(e)}>
          <div class="modal-heading">
          <h1>Create Listing</h1>
          </div>

          <div className="input-container">
            <label>Club Name</label>
            <input type="text" name="clubName" placeholder="enter the name of the gym where the sessions were purchased" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container" style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={constainerStyles}>
              <label>Club Address</label>
              <input type="address" name="clubAddress" placeholder="enter the gyms location" onChange={(e) => onInputChange(e)} />
            </div>

            <div style={constainerStyles}>
              <label>Club City</label>
              <input type="text" name="clubCity" placeholder="enter your state" onChange={(e) => onInputChange(e)} />
            </div>

            <div style={constainerStyles}>
              <label>Club State</label>
              <input type="text" name="clubState" placeholder="enter your state" onChange={(e) => onInputChange(e)} />
            </div>

            <div style={constainerStyles}>
              <label>Zip code</label>
              <input type="text" name="clubZipCode" placeholder="enter your zipcode" onChange={(e) => onInputChange(e)} />
            </div>
          </div>

          <div className="input-container">
            <label>Number of sessions</label>
            <input type="text" name="sessionCount" placeholder="enter the number of sessions you are listing" onChange={(e) => onInputChange(e)} />
          </div>

          <div className="input-container">
            <label>Rate per session</label>
            <input type="cost" name="sessionPrice" placeholder="enter what price you'd like to list the sessions for (per session)." onChange={(e) => onInputChange(e)} />
          </div>

          <div className="modal-footer">
            <button onClick={() => setShow(false)}>cancel</button>
            <button style={{ marginLeft: '16px' }} onClick={() => onCreateListing()}>submit</button>
          </div>

        </div>
      </Modal >
    </div >
  );
};

export default CreateListingModal;