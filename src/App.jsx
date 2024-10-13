import React, { useState } from 'react';

import Home from './components/home.jsx'
import MaximizedImage from './components/maximizedImage.jsx';

import './App.css'

function App() {

  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedImage, setMaximizedImage] = useState(null);
  const [description, setDescription] = useState(null);

  const onToggleMaximize = () => {
    setIsMaximized(true);
    console.log('Maximized Image:', maximizedImage);
    console.log('Description:', description);
  }

  const handleToggleMaximize = (image, description) => {
    setIsMaximized(true);
    console.log('HTM Maximized Image:', image);
    console.log('HTM Description:', description);
    setMaximizedImage(image);
    setDescription(description);
  };

  const handleClose = () => {
    setIsMaximized(false);
  }

  return (
    <>
      <div className="App">
        <Home onToggleMaximize={handleToggleMaximize} />
        {isMaximized && (
          <MaximizedImage
            image={maximizedImage}
            description={description}
            onClose={handleClose}
          />
        )}
      </div>
    </>
  )
}

export default App
