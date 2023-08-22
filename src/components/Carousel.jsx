import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
import carousel4 from '../assets/carousel4.png';
import '../styles/carousel.css';

const CustomPrevArrow = ({ onClick }) => (
  <div className="prev-arrow" onClick={onClick}>
    <i class="bi bi-chevron-left"></i>
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="next-arrow" onClick={onClick}>
    <i class="bi bi-chevron-right"></i>
  </div>
);

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '120px',
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
      responsive: [
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '10px'
          },
        },
      ],
    };
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={carousel1} alt="" className="carousel-image" />
          </div>
          <div>
            <img src={carousel2} alt="" className="carousel-image" />
          </div>
          <div>
            <img src={carousel3} alt="" className="carousel-image" />
          </div>
          <div>
            <img src={carousel4} alt="" className="carousel-image" />
          </div>
          <div>
            <img src={carousel3} alt="" className="carousel-image" />
          </div>
        </Slider>
      </div>
    );
  }
}
