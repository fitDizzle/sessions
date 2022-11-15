import React from 'react';
import HeroImage from '../../../public/assets/images/pexels-thirdman-6958391.jpg';
import Cards from './cards.jsx';

const HeroStyles = {
  backgroundImage: `url(${HeroImage})`,
  height: '60vh',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0 30px 40px rgba(0,0,0,0.1)',
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
};

const overlay = {
  height: '60vh',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.045)',
  position: 'absolute'
};

const rel = {
  position: 'relative',
  paddingRight: '100px',
  paddingTop: '100px',
  fontSize: '3.5em'
};


const Hero = () => {
  return (
    <div style={HeroStyles}>
      <div style={overlay}></div>
      <h1 style={rel}>No More Wo's</h1>
      <h2 style={rel}>Sessions has your back.</h2>
      <button className="btn-primary">Find Sessions</button>
    </div>
  );
};

// {/* <Cards /> */ }
export default Hero;