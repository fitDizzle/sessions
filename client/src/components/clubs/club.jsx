import React from 'react';

const Club = (props) => {
  const { _id, biz_info, biz_name, biz_phone, biz_phone_ext, e_address, e_city, e_country, e_postal, e_state, e_zip_full, web_url } = props.club;

  const clubStyles = {
    heigth: '4em',
    width: '60vw',
    padding: '16px',
    fontSize: '16px',
    border: '1px solid grey',
    justifyContent: 'space-evenly',
    display: 'flex',
    flexWrap: 'wrap'
  };

  const contentContainer = {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    fontSize: '24px',
    flexWrap: 'wrap'
  };

  const listingText = {
    paddingTop: '10px'
  };

  return (
    <div style={clubStyles}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={contentContainer}>
          <h3>Club Information</h3>
          <p style={listingText}>Club Name: {biz_name}</p>
          <p style={listingText}>Description: {biz_info}</p>
          <p style={listingText}>Phone Number: {biz_phone}</p>
          <p style={listingText}>Extension: {biz_phone_ext}</p>
        </div>

        <div style={contentContainer}>
          <h3>Location</h3>
          <p style={listingText}>Club Address: {e_address}</p>
          <p style={listingText}>City: {e_city}</p>
          <p style={listingText}>Country: {e_country}</p>
          <p style={listingText}>Postal: {e_postal}</p>
          <p style={listingText}>State: {e_state}</p>
          <p style={listingText}>Zip Code: {e_zip_full}</p>
        </div>
      </div>

      <div style={contentContainer}>
        <h3>
          Website
        </h3>
        <a style={listingText} href={web_url}>{web_url}</a>
      </div>
      <button className="list-btn" style={{ fontSize: '16px', width: '200px', height: '75px' }}>View Listings</button>
    </div>
  );
};

export default Club;