import React from 'react';

const ImgContainer = ({ title, text, image, maximizedImage, description, onToggleMaximize }) => {
    console.log(title, text, image, maximizedImage, description);
  const handleToggleMaximize = () => {
    onToggleMaximize(maximizedImage, description);
  };


  return (
    <div className="img-container">
        <div className='text-container'>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
      <img src={image} alt="Image" onClick={handleToggleMaximize} />
    </div>
  );
};

export default ImgContainer;