import React from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

function Navbar() {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center">
          <NavLink to={'/about'}>About Us</NavLink>
          <NavLink to={'/'}>Furniture</NavLink>
          <NavLink to={'/partnerships'}>Partnerships</NavLink>
          <NavLink to={'/contact'}>Contact</NavLink>
        </div>
        <div className="navbar-right">
          <button className='signup-button'>Sign In</button>
          <button className='cart-button'>
            <i class="bi bi-bag"></i>
          </button>
        </div>
        <i class="bi bi-list"></i>
      </div>
    </div>
  );
}

export default Navbar;
