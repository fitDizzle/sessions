import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

const AppStyles = {
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  height: '100vh',
  justifyContent: 'center',
  alignItems: 'center'
};

const App = () => {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);