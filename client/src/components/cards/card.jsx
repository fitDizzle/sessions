import React from 'react';
import PurchaseModal from '../purchase/purchaseModal.jsx';
import './style.css';

const Card = (props) => {
  const { id, userId, clubName, clubAddress, clubCity, clubState, clubZipCode, sessionCount, sessionPrice } = props.listing;

  return (
    <div class="card-body courses-container">
      <div class="course">
        <div class="course-preview">
          <h6>Club Information</h6>
          <h2>{clubName}</h2>
          <p>{clubAddress + ', ' + clubCity + ', ' + clubState}</p>
          <a href="#">View all listings <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="course-info">
          <div class="progress-container">
            {/* <div class="progress"></div> */}
            {/* <span class="progress-text">
              6/9 Challenges
            </span> */}
          </div>
          <h6>Personal Training</h6>
          <h2>{sessionCount + ' ' + ' Sessions'}</h2>
          <h2>Cost Per Session: {' $' + sessionPrice}</h2>
          <h2>Total: {' $' + +sessionCount * +sessionPrice}</h2>
          <PurchaseModal />
        </div>
      </div>
    </div>
  );
};

export default Card;