import React from "react";
//  Le Hook useLocation intégré pour la gestion des chemins utilisé 
import { useLocation } from "react-router";

const Banner = () => {
  const location = useLocation(); 
  let imageUrl = "img/./paysage1.png";
  let textUrl = "Chez vous, partout et ailleurs";

  if (location.pathname === "/about") {  
    imageUrl = "img/./paysage2.png";
    textUrl = "";
  }

  return (
    <div className="banner">
      <img src={imageUrl} alt="Image paysage" />
      <p>{textUrl}</p>
    </div>
  );
};

export default Banner;
