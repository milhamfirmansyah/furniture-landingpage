import React from 'react';
import logo from '../assets/logo.png';
import '../styles/footer.css'

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-left">
          <img src={logo} alt="" />
          <p className='footer-desc'>
            Dekoor is a furniture company created to fulfill the needs of family with aesthetic feeling in their furniture. Always pay attention to details and give clear communication for the customers. Priority of our design is
            comfortability.
          </p>
          <p className='copyright'>©Copyright 2022 Dekoor</p>
        </div>
        <div className="footer-right">
          <div>
            <p className="footer-right-header">Support</p>
            <p>FAQ</p>
            <p>Shipping & Returns</p>
            <p>Care guide</p>
            <p>Redeem warranty</p>
          </div>

          <div>
            <p className="footer-right-header">Social Media</p>
            <p>Instagram</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Tiktok</p>
          </div>

          <div>
            <p className="footer-right-header">About Us</p>
            <p>Our Story</p>
            <p>Designer</p>
            <p>Craftmanship</p>
            <p>Sustainability</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
