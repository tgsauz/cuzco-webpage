import React, { useState } from 'react';

import Home from './components/home.jsx'
import MaximizedImage from './components/maximizedImage.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

import './App.css'

function App() {

  const [isMaximized, setIsMaximized] = useState(false);
  const [maximizedImage, setMaximizedImage] = useState(null);
  const [description, setDescription] = useState(null);

  const onToggleMaximize = () => {
    setIsMaximized(true);
  }

  const handleToggleMaximize = (image, description) => {
    setIsMaximized(true);
    setMaximizedImage(image);
    setDescription(description);
  };

  const handleClose = () => {
    setIsMaximized(false);
  }

  return (
    <>
      <div className="App">
        <Navbar />
        <Home onToggleMaximize={handleToggleMaximize} />
        {isMaximized && (
          <MaximizedImage
            image={maximizedImage}
            description={description}
            onClose={handleClose}
          />
        )}
        <Footer />
      </div>
    </>
  )
}

export default App
