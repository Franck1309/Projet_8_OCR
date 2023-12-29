import React, { useState } from "react";
  // props children qui correspond aux images dans le carrousel
const Caroussel = ({ children }) => {
  // j'enregistre l'état du slide affiché 
  const [currentSlide, setCurrentSlide] = useState(0);
  // fonction boolean qui envoie +1 à ma state ou met la state à 0 si c'est ma derniere image 
  const nextSlide = () => {
    setCurrentSlide((slide) => (slide === children.length - 1 ? 0 : slide + 1));
  };
  // fonction boolean qui envoie -1 à ma state ou met la state à la derniere image si je suis à ma premiere image
  const prevSlide = () => {
    setCurrentSlide((slide) => (slide === 0 ? children.length - 1 : slide - 1));
  };

  const [spanVisibility, setSpanvisibility] = useState(true)

  if (children.length === 0 ){
    setSpanvisibility(false)
  }

  return (
    <div className="caroussel">
      <button onClick={prevSlide} className="carousel-button left-chevron">&#8249;</button>
      <div className="in-caroussel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children.map((image, index) => (
          <div key={index} className="container-images">
            {image}
          </div>
        ))}
      </div>
      {children.length > 1 && ( 
        <span className="numberSlide">{currentSlide +1}/{children.length}</span>
      )}
      <button onClick={nextSlide} className="carousel-button right-chevron">&#8250;</button>
    </div>
  );
};

export default Caroussel;
