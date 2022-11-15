import React from 'react';
import RegisterModal from '../registerModal/RegisterModal.jsx';
import LoginModal from '../loginModal/LoginModal.jsx';

const NavStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '35%',
  listStyle: 'none'
};

const NavListItemStyles = {
  margin: '0.5em 0em 0.5em 0em',
  color: 'rgb(230, 177, 126)',
  textDecoration: 'none'
};

const NavBar = () => {
  return (
    <ul style={NavStyles}>
      <li><a style={NavListItemStyles} href="">Home</a></li>
      <li style={NavListItemStyles}><a href="">About</a></li>
      <li className="btn-nav"><RegisterModal /></li>
      <li className="btn-nav"><LoginModal /></li>
      <li><a style={NavListItemStyles} href="">Find Sessions</a></li>
      <li><a style={NavListItemStyles} href="">Sell Sessions</a></li>
      <li ><a style={NavListItemStyles} href="">Find A Club</a></li>
    </ul>
  )
};

export default NavBar;