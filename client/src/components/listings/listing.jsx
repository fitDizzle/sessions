import React from 'react';
import PurchaseModal from '../purchase/purchaseModal.jsx';

const Listing = (props) => {
  const { id, userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice } = props.listing;

  const listingStyles = {
    display: 'flex',
    flexDirection: 'row',
    heigth: '4em',
    width: '80vw',
    padding: '16px',
    border: '1px solid grey',
    justifyContent: 'space-evenly'
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    fontSize: '24px'
  };

  const listingText = {
    paddingTop: '10px'
  };

  return (
    <div style={listingStyles}>
      <div style={contentContainer}>
        <h3>Facility Information</h3>
        <p style={listingText}>Club: {clubName}</p>
        <p style={listingText}>City: {clubCity}</p>
        <p style={listingText}>State: {clubState}</p>
        <p style={listingText}>Location: {clubAddress}</p>
      </div>
      <div style={contentContainer}>
        <h3>Session Information</h3>
        <p style={listingText}>Session Type: Personal Training</p>
        <p style={listingText}>Sessions: {sessionCount}</p>
        <p style={listingText}>Cost Per Session: {' $' + sessionPrice}</p>
        <p style={listingText}>Total: {' $' + +sessionCount * +sessionPrice}</p>
      </div>
      <div>
        {/* <button className="list-btn">Contact Owner</button> */}
        <PurchaseModal />
      </div>
    </div>
  );
};

export default Listing;