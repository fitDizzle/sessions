import React, { useState, useEffect } from 'react';
import Club from './club.jsx';
import getAllClubs from '../../api/clubAPI.js';
import ClubCard from '../cards/clubCard.jsx';

const searchInputStyle = {
  width: '100%',
  padding: '32px',
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

  const clubContainerStyles = {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evnenly'
  }

  const container = {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap'
  };

  return (
    <div style={container}>
      <input style={searchInputStyle} type="search" placeholder="find a club by entering a club name or location..." onChange={(e) => onHandleSearch(e)} value={searchData} />
      <div style={clubContainerStyles}>{allClubs.slice(1,).filter((c) => c.biz_name.toLowerCase().includes(searchData.toLowerCase())).map((club) => {
        return (<ClubCard club={club} key={club._id} />)
      })}</div>

    </div>
  );
};

export default Clubs;