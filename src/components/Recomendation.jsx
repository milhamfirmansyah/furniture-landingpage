import React from 'react';
import recomendation1 from '../assets/recomendation1.png';
import recomendation2 from '../assets/recomendation2.png';
import recomendation3 from '../assets/recomendation3.png';
import '../styles/recomendation.css';

function Recomendation() {
  return (
    <div className="recomendation-wrapper">
      <div className="recomendation-container">
        <div className="recomendation-left">
          <img src={recomendation1} alt="" />
          <img src={recomendation2} alt="" />
          <img src={recomendation3} alt="" />
        </div>
        <div className="recomendation-right">
          <p className="recomendation-categories">Categories</p>
          <h1>Furniture Sets Recommendations</h1>
          <h4 className="bedroom">Bedroom</h4>
          <div>
            <h4 className="livingroom">Living Room</h4>
            <p>Enjoy a great living room aesthetics with your family Designs created for increased comfortability</p>
          </div>
          <h4 className="homeoffice">Home Office</h4>
          <h4 className="gamingroom">Gaming Room</h4>
        </div>
      </div>
    </div>
  );
}

export default Recomendation;
