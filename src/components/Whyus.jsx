import React from 'react';
import '../styles/whyus.css'

function Whyus() {
  return (
    <div className="whyus-wrapper">
      <div className="whyus-container">
        <p className="why-choose-us">WHY CHOOSE US?</p>
        <h1>We care about details and the quality of our products</h1>
        <div className="whyus">
          <div className="whyus-reason">
            <div>
              <i class="bi bi-search"></i>
            </div>
            <p>MANUFACTURED WITH QUALITY MATERIALS</p>
          </div>
          <div className="whyus-reason">
            <div className='five-reason'>5</div>
            <p>5 YEARS OF WARRANTY FOR EACH PROFUCT</p>
          </div>
          <div className="whyus-reason">
            <div>
              <i class="bi bi-bag"></i>
            </div>
            <p>20 YEARS OF EXPERTISE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whyus;
