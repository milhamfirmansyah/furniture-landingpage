import React from 'react';
import gusto from '../assets/gusto.png';
import stripe from '../assets/stripe.png';
import treehouse from '../assets/treehouse.png';
import upwork from '../assets/upwork.png';
import '../styles/partners.css'

function Partners() {
  return (
    <div className="partners-wrapper">
      <div className="partners-container">
        <div className="partners-amount">
          <h1>25+</h1>
          <p>PARTNERED BRANDS</p>
        </div>
        <div className="partners-brand">
          <img src={gusto} alt="" />
          <img src={stripe} alt="" />
          <img src={treehouse} alt="" />
          <img src={upwork} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
