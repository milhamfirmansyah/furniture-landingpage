import React from 'react';
import Carousel from './Carousel';
import '../styles/bestseller.css';

function BestSeller() {
  return (
    <div className="bestseller-container">
      <div className="bestsellerheader-wrapper">
        <div className="bestsellerheader-container">
          <div className="bestsellerheader-left">
            <p>OUR PRODUCTS</p>
            <h1>This month’s best seller</h1>
          </div>
          <div className="bestsellerheader-right">
            <button>SEE MORE</button>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}

export default BestSeller;
