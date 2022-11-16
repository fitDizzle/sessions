import React, { useState, useEffect } from 'react';
import Club from './club.jsx';
import getAllClubs from '../../api/clubAPI.js';

const searchInputStyle = {
  width: '81.25vw',
  padding: '16px',
  marginBottom: '16px',
  fontSize: '24px'
};

const Clubs = (props) => {
  const [allClubs, setAllClubs] = useState([]);
  const [searchData, setSearchData] = useState('');

  const onHandleSearch = (e) => {
    setSearchData(e.target.value);
  };

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
      <input style={searchInputStyle} type="search" placeholder="find a club by entering a club name or location..." onChange={(e) => onHandleSearch(e)} value={searchData} />
      <div>{allClubs.slice(1,).filter((c) => c.biz_name.toLowerCase().includes(searchData.toLowerCase())).map((club) => {
        return (<Club club={club} key={club._id} />)
      })}</div>

    </div>
  );
};

export default Clubs;