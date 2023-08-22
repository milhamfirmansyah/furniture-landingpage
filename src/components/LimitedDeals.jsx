import React from 'react';
import '../styles/limited.css'

function LimitedDeals() {
  return (
    <div className="limited-wrapper">
      <div className="limited-container">
        <p className='limited-deals'>LIMITED DEALS</p>
        <h1>Become a member and get 10% off of your first purchase</h1>
        <div className='email-container'>
          <input type="email" placeholder='Enter your email here' />
          <button>
            <i class="bi bi-envelope"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LimitedDeals;
