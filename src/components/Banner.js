import React from "react";

const Banner = ({imageUrl, textUrl}) => {

  return (
    <div className="banner">
      <img src={imageUrl} alt="Image paysage" />
      <p>{textUrl}</p>
    </div>
  );
};

export default Banner;
