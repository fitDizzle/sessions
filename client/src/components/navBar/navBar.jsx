import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import RegisterModal from '../registerModal/RegisterModal.jsx';
import LoginModal from '../loginModal/LoginModal.jsx';
import CreateListingModal from '../createListing/createListingModal.jsx';
import Logout from './LogoutButton.jsx';

const NavStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '50%',
  listStyle: 'none',
  flexWrap: 'wrap'
};

const NavBar = (props) => {
  const user = useSelector((state) => state.user.value);
  console.log(user)
  return (
    <ul style={NavStyles}>
      <li className="btn-nav">
        <div>
          <button onClick={(e) => props.viewSelect('home')}>Home</button>
        </div>
      </li>
      {/* <li className="btn-nav" >
        <div>
          <button onClick={(e) => props.viewSelect('about')}>About</button>
        </div>
      </li> */}
      <li className="btn-nav">
        <div>
          <button onClick={(e) => props.viewSelect('clubs')}>Find A Club</button>
        </div>
      </li>
      <li className="btn-nav" >
        <div>
          <button onClick={(e) => props.viewSelect('sessions')}>Find Sessions</button>
        </div>
      </li>
      {user._id !== undefined ? <li className="btn-nav" ><CreateListingModal /></li> : null}
      <li className="btn-nav"><RegisterModal /></li>
      {user._id !== undefined ? <Logout /> : <li className="btn-nav"><LoginModal /></li>}
    </ul >
  )
};

export default NavBar;