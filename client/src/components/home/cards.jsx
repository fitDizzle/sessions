import React from 'react';

const CardContainer = {
  width: '100%'
};

const cardStyle = {
  width: '5em',
  border: '5px solid black'
};

const Cards = () => {
  return (
    <div style={CardContainer}>
      <div style={cardStyle}>Card1</div>
      <div style={cardStyle}>Card2</div>
      <div style={cardStyle}>Card3</div>
    </div>
  );
};

export default Cards;