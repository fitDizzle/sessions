import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Body from './components/home/body.jsx';
import Hero from './components/home/hero.jsx';
import Listing from './components/listings/listings.jsx';
import Clubs from './components/clubs/clubs.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import About from './components/home/about.jsx';
import Footer from './components/footer/footer.jsx';
import authReducer from './redux/features/authSlice';
import './index.css';

import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    user: authReducer
  }
});

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
  const [selected, setSelected] = useState('home');
  const handleViewSelect = (option) => {
    setSelected(option);
  };

  const user = useSelector((state) => state.user);

  const [views, setViews] = useState({ home: <Hero viewSelect={handleViewSelect} />, sessions: <Listing />, dashboard: <Dashboard />, clubs: <Clubs />, about: <About /> });
  return (
    <div style={AppStyles} className="bg">
      <Header viewSelect={handleViewSelect} user={user} />
      <Body view={views[selected]} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);