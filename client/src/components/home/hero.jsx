import React from 'react';
import HeroImage from '../../../public/assets/images/pexels-thirdman-6958391.jpg';
import Cards from './cards.jsx';

const HeroStyles = {
  backgroundImage: `url(${HeroImage})`,
  height: '100%',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  boxShadow: '0 30px 40px rgba(0,0,0,0.1)',
  alignItems: 'flex-end',
  display: 'flex',
  flexDirection: 'column',
  color: 'rgba(0, 0, 0, 0.714)'
};

const overlay = {
  height: 'auto',
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


const Hero = (props) => {
  return (
    <div style={HeroStyles}>
      <div style={overlay}></div>
      <h1 style={rel}>No More Wo's</h1>
      <h2 style={rel}>Sessions has your back.</h2>
      <button className="btn-primary" onClick={() => props.viewSelect('sessions')}>Find Sessions</button>
      <div style={{ width: '100%', height: '100%', fontSize: '1.6em', marginTop: '325px', justifySelf: 'flex-end', alignSelf: 'flex-end', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <h3>A Social Marketplace for buying, selling and trading fitness sessions.</h3>
      </div>
    </div>
  );
};

// {/* <Cards /> */ }
export default Hero;