import React from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  return (
    <div>
      <NavLink to="/locationChoice">
        <p>Voir l'appartement</p>
      </NavLink>
    </div>
  );
};

export default Card;
