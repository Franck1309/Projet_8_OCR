import React from "react";

const InfoLocation = () => {
  return (
    <div className="container">
      <div className="infosLocation">
        <h1>Nom de la location</h1>
        <p>Lieu</p>
        <div className="tags">tags</div>
      </div>
      <div>
        <div className="infosProprio">
          <p className="name">
            Nom <br />
            Prénom
          </p>
          <div className="circle"></div>
        </div>
        <div className="rating">rating</div>
      </div>
    </div>
  );
};

export default InfoLocation;
