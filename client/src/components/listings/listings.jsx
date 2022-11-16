import React from 'react';

const Listings = (props) => {
  return (
    <div>
      <input type="search" placeholder="find sessions for sale by entering a club or location" onChange={(e) => props.onSearch(e)} value={props.Input} />

    </div>
  );
};

export default Listings;