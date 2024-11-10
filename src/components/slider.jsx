import React, { useEffect, useState } from 'react';
import '../styles/slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [delayTriggered, setDelayTriggered] = useState(false);

  const slides = [
    { id: 1, content: (
      <a className='storelink' href='https://pedix.app/el-cuzco' target='_blank' rel='noopener noreferrer'>
        <div className='slide-content'>
          <img src='/background/bg01.jpg' alt='Slide 1' />
        </div>
      </a>
    ) },
    { id: 2, content: (
      <a className='link'>
        <div className='slide-content'>
          <img src='/background/bg04.jpg' alt='Slide 2' />
        </div>
      </a>
    ) },
    { id: 3, content: (
      <a className='link'>
        <div className='slide-content'>
          <img src='/background/bg02.jpg' alt='Slide 3' />
        </div>
      </a>
    ) },
  ];

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    } else {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }

    clearInterval(intervalId);
    setIntervalId(null);

    if (!delayTriggered) {
      setDelayTriggered(true);
      const newIntervalId = setTimeout(() => {
        const autoIntervalId = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
        }, 5000);
        setIntervalId(autoIntervalId);
      }, 10000);
      return () => clearTimeout(newIntervalId);
    } else {
      const autoIntervalId = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      }, 5000);
      setIntervalId(autoIntervalId);
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 5000);

    setIntervalId(intervalId);

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`slide ${currentSlide === index ? 'active' : ''}`}>
          {slide.content}
        </div>
      ))}
      <div className="dots">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className="arrows">
        <div className='arrow left' onClick={() => handleArrowClick('left')} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line></svg>
        </div>
        <div className='arrow right' onClick={() => handleArrowClick('right')} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ec8116" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right-circle"><circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        </div>
      </div>
    </div>
  );
};

export default Slider;