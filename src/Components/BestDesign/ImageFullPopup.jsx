import React, { useState } from "react";
import data from "./data";

const ImageFullPopup = ({ imageUrl, onClose, category }) => {
  const items = data[category] || [];
  const [currentIndex, setCurrentIndex] = useState(imageUrl);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const final_img_url = items[currentIndex].image;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <img src={final_img_url} alt="Full" className="full-image" />
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="navigation-buttons">
          <button className="prev-button" onClick={handlePrev}>
            &lt;
          </button>
          <button className="next-button" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageFullPopup;
