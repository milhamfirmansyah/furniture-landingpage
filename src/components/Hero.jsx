import React from 'react';
import hero from '../assets/hero.png';
import '../styles/hero.css';

function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero-container">
        <div className="hero-left">
          <h1>
            The kind of <span>furniture</span> you have been looking for
          </h1>
          <div className="hero-button">
            <button className="search-catalog-button">
              <i class="bi bi-search"></i>SEARCH CATALOG
            </button>
            <button className="watch-videos-button">
              <i class="bi bi-play-circle"></i>WATCH VIDEOS
            </button>
          </div>
        </div>

        <div className="hero-right">
          <img src={hero} alt="" />
          <div className='price'>$329</div>
          <h1>Pösht Sofa</h1>
          <button>
            VIEW DETAILS <i class="bi bi-chevron-right"></i>
          </button>
          <p className="highlighted">HIGHLIGHTED PRODUCT</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
