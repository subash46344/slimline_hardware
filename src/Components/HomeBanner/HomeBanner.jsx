import React, { useState, useEffect } from 'react';
import './HomeBannerStyle.css';

import image1 from './../../assets/slimline-banner2.jpeg';
import image2 from './../../assets/slimline-banner4.jpeg';
import image3 from './../../assets/slimline-banner7.jpeg';

function HomeBanner() {
  const images = [image1, image2, image3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div id='#'
      className='banner_container'
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <div className="banner_container_btn" onClick={prevImage} style={{transform: 'rotate(180deg)'}}>PREV.</div>
      <div className="banner_container_btn" onClick={nextImage} style={{transform: 'rotate(360deg)'}}>NEXT.</div>
    </div>
  );
}

export default HomeBanner;
