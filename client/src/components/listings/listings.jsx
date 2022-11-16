import React, { useState, useEffect } from 'react';
import ListingAPI from '../../api/listingAPI.js';
import Listing from './listing.jsx';

const searchInputStyle = {
  width: '81.25vw',
  padding: '16px',
  marginBottom: '16px',
  fontSize: '24px'
};

const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [searchData, setSearchData] = useState('');

  const onHandleSearch = (e) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    const loadListings = () => {
      return ListingAPI.getAllListings().then((res) => {
        console.log(res);
        setAllListings(res);
      });
    }
    loadListings();
  }, []);

  return (
    <div>
      <input style={searchInputStyle} type="search" placeholder="find a session by club  or location..." onChange={(e) => onHandleSearch(e)} value={searchData} />
      <div>{allListings.filter((c) => c.clubName.toLowerCase().includes(searchData.toLowerCase()) || c.clubAddress.toLowerCase().includes(searchData.toLowerCase()) || c.clubCity.toLowerCase().includes(searchData.toLowerCase())).map((listing) => {
        return (<Listing listing={listing} key={listing._id} />)
      })}</div>
    </div>
  );
};

export default Listings;