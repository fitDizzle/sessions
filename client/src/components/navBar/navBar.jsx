import React from 'react';

const NavStyles = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '35%',
  listStyle: 'none'
};

const NavListItemStyles = {
  margin: '0.5em 0em 0.5em 0em',
  color: 'blue'
};

const NavBar = () => {
  return (
    <ul style={NavStyles}>
      <li style={NavListItemStyles}>HOME</li>
      <li style={NavListItemStyles}>Search Offers</li>
      <li style={NavListItemStyles}>Create Listing</li>
      <li style={NavListItemStyles}>Find a Club</li>
    </ul>
  )
};

export default NavBar;