import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Body from './components/home/body.jsx';
import Hero from './components/home/hero.jsx';
import Listing from './components/listings/listings.jsx';
import Clubs from './components/clubs/clubs.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import About from './components/home/about.jsx';
import Footer from './components/footer/footer.jsx';
import './index.css';

const AppStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: 'auto',
  justifyContent: 'space-around',
  alignItems: 'center',
  flexWrap: 'wrap'
};

const App = () => {
  console.log('rerendered')
  const [selected, setSelected] = useState('home');
  const handleViewSelect = (option) => {
    setSelected(option);
  };

  const [views, setViews] = useState({ home: <Hero viewSelect={handleViewSelect} />, sessions: <Listing />, dashboard: <Dashboard />, clubs: <Clubs />, about: <About /> });
  return (
    <div style={AppStyles} className="bg">
      <Header viewSelect={handleViewSelect} />
      <Body view={views[selected]} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
// {/* <Footer /> */}