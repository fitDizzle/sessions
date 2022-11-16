import React, { useState, useEffect } from 'react';
import Club from './club.jsx';
import getAllClubs from '../../api/clubAPI.js';

const searchInputStyle = {
  width: '100%',
  padding: '16px'
};

const Clubs = (props) => {
  const [allClubs, setAllClubs] = useState([]);
  useEffect(() => {
    const renderClubs = async () => {
      return getAllClubs().then((res) => {
        setAllClubs(res.data);
      });
    }
    renderClubs();
  }, []);
  return (
    <div>
      <input style={searchInputStyle} type="search" placeholder="find a club by entering a club name or location..." onChange={(e) => props.onSearch(e)} value={props.Input} />
      <div>{allClubs.slice(1,).map((club) => {
        return (<Club club={club} key={club._id} />)
      })}</div>

    </div>
  );
};

export default Clubs;