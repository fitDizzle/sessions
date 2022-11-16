import React from 'react';

const Club = (props) => {
  const { _id, biz_info, biz_name, biz_phone, biz_phone_ext, e_address, e_city, e_country, e_postal, e_state, e_zip_full, web_url } = props.club;

  const clubStyles = {
    heigth: '4em',
    width: '80vw',
    padding: '16px',
    fontSize: '16px',
    border: '1px solid grey',
    justifyContent: 'space-evenly'
  };

  return (
    <div style={clubStyles}>
      {/* <p>{_id}</p> */}
      <p>Club Name: {biz_name}</p>
      <p>Club Information: {biz_info}</p>
      <p>Phone Number: {biz_phone}</p>
      <p>Extension: {biz_phone_ext}</p>
      <p>Club Address: {e_address}</p>
      <p>City: {e_city}</p>
      <p>Country: {e_country}</p>
      <p>Postal: {e_postal}</p>
      <p>State: {e_state}</p>
      <p>Zip Code: {e_zip_full}</p>
      <p>Website: {web_url}</p>
      <button>View Listings</button>
    </div>
  );
};

export default Club;