import React from 'react';
import RegisterModal from '../registerModal/RegisterModal.jsx';
import LoginModal from '../loginModal/LoginModal.jsx';
import CreateListingModal from '../createListing/createListingModal.jsx';

const NavStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '50%',
  listStyle: 'none',
  flexWrap: 'wrap'
};

const NavBar = (props) => {
  return (
    <ul style={NavStyles}>
      <li><button onClick={(e) => props.viewSelect('home')}>Home</button></li>
      <li><button onClick={(e) => props.viewSelect('about')}>About</button></li>
      <li><button onClick={(e) => props.viewSelect('clubs')}>Find A Club</button></li>
      <li><button onClick={(e) => props.viewSelect('sessions')}>Find Sessions</button></li>
      <li className="btn-nav" ><CreateListingModal /></li>
      <li className="btn-nav"><RegisterModal /></li>
      <li className="btn-nav"><LoginModal /></li>
    </ul>
  )
};

export default NavBar;