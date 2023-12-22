import React, { useState } from "react";

const Caroussel = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === children.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? children.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="carousel-button left-chevron">&#8249;</button>
      <div className="carousel-inner" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {children.map((child, index) => (
          <div key={index} className="carousel-item">
            {child}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="carousel-button right-chevron">&#8250;</button>
    </div>
  );
};

export default Caroussel;
