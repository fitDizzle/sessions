import React from 'react';

const Listing = (props) => {
  const { id, userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice } = props.listing;

  const listingStyles = {
    heigth: '4em',
    width: '80vw',
    padding: '16px',
    fontSize: '16px',
    border: '1px solid grey',
    justifyContent: 'space-evenly'
  };

  return (
    <div style={listingStyles}>
      <p>Club: {clubName}</p>
      <p>City: {clubCity}</p>
      <p>State: {clubState}</p>
      <p>Location: {clubAddress}</p>
      <p>Sessions: {sessionCount}</p>
      <p>Cost Per Session: {sessionPrice}</p>
      <p>sessionTotal: {+sessionCount * +sessionPrice}</p>
      <button>Contact Owner</button>
      <button>Purchase Sessions</button>
    </div>
  );
};

export default Listing;