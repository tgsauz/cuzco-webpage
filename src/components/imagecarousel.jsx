import '../styles/imagecarousel.css';
import React, { useState } from "react";

const ImageCarousel = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/salaa.jpg",
        "/placeholder1.jpg",
        "/placeholder2.jpg",
        "/placeholder3.jpg",
    ];

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex(
            (currentImageIndex + images.length - 1) % images.length
        );
    };

    return (
        <div className="carousel">
        <button className="prev" onClick={handlePrev}>
          {'<'}
        </button>
        <div
          className="carousel-inner"
          style={{ transform: `translateX(${currentImageIndex * -100}%)` }}
        >
          {images.map((image, index) => (
            <div 
            key={index}
            className={`carousel-item ${index === currentImageIndex ? 'active' : 'inactive'}`}
            >
              <img src={image} alt="carousel image" />
            </div>
          ))}
        </div>
        <button className="next" onClick={handleNext}>
          {'>'}
        </button>

      </div>
    );
  };

  export default ImageCarousel;