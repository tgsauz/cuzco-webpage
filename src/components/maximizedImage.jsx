import React from 'react';

const MaximizedImage = ({ image, description, onClose }) => {
  return (
    <div className="maximized-container">
      <img src={image} alt="Image" className="maximized-img" />
      <div className="description">
        <p>{description}</p>
      </div>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default MaximizedImage;