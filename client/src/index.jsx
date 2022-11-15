import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Body from './components/home/body.jsx';
import Hero from './components/home/hero.jsx';
import Listing from './components/listings/listings.jsx';
import Clubs from './components/clubs/clubs.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Footer from './components/footer/footer.jsx';
import './index.css';

const AppStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  justifyContent: 'space-evenly',
  alignItems: 'center'
};

const App = () => {
  const [views, setViews] = useState({hero: <Hero />, listings: <Listing />, dashboard: <Dashboard />, clubs: <Clubs />});
  const [selected, setSelected] = useState(0);

  return (
    <div style={AppStyles} className="bg">
      <Header />
      <Body view={views['hero']} />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);