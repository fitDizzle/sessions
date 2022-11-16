import React from 'react';
import ColorLogo from '../../../public/assets/logos/png/logo-no-background.png';

import NavBar from '../navBar/NavBar.jsx';

const headerStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
  padding: '2em 0px 2em 0px',
  backgroundColor: 'rgb(255, 255, 255)',
  flexWrap: 'wrap',
};

const headerImageStyles = {
  width: '500px',
  height: 'auto',
  float: 'left'
};

const Header = (props) => {
  return (
    <div style={headerStyles}>
      <img style={headerImageStyles} src={ColorLogo} alt="sessions-logo" />
      <NavBar viewSelect={props.viewSelect} />
    </div>
  )
};

export default Header;