import React, { useState, useEffect } from 'react';

const Footer = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // écouteur d'événement qui met à jour mon état sur la taille de l'écran
    window.addEventListener('resize', handleResize);
    // fonction de démontage du rendu pour éviter les bugs
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    // gestion de l'image selon la width de l'écran
  const imageUrl = windowWidth < 550 ? '/img/mobileFooter.png' : '/img/desktopFooter.png';

  return (
    <div className='footer'>
      <img src={imageUrl} alt="Logo Kasa" />
    </div>
  );
};

export default Footer;
