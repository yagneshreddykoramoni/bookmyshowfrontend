import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className={styles.total}>
    <div className={styles.slide}>
      <Slider {...settings}>
        <div>
          <img src={'/src/images/slide_img1.jpg'} alt="slide1" />
        </div>
        <div>
          <img src={'/src/images/slide_img2.jpg'} alt="slide2" />
        </div>
        <div>
          <img src={'/src/images/slide_img3.jpg'} alt="slide3" />
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;