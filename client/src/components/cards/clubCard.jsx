import React from 'react';
import PurchaseModal from '../purchase/purchaseModal.jsx';
import './style.css';

const ClubCard = (props) => {
  const { _id, biz_info, biz_name, biz_phone, biz_phone_ext, e_address, e_city, e_country, e_postal, e_state, e_zip_full, web_url } = props.club;

  return (
    <div class="card-body courses-container">
      <div class="course">
        <div class="course-preview">
          <h6>Club Information</h6>
          <h2>{biz_name}</h2>
          <p>{biz_info}</p>
          <p>{biz_phone + ' ' + biz_phone_ext}</p>
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
          <h2>{e_address + ', ' + e_city + ', ' + e_state}</h2>
          <h2>{e_zip_full}</h2>
          <h2>{e_country}</h2>
          <button className="btn">View All Listings</button>
        </div>
      </div>
    </div>
  );
};

export default ClubCard;