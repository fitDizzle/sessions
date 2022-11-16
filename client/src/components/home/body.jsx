import React from 'react';

// Views
import Hero from './hero.jsx';
import Listings from '../listings/listings.jsx';
import Dashboard from '../dashboard/dashboard.jsx';

const bodyStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '80vh',
  alignItems: 'center'
};

const Body = (props) => {
  const view = props.view;

  return (
    <div style={bodyStyles}>
      {view}
    </div>
  );
};

export default Body;