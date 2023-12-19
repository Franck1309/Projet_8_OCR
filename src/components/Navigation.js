import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {

  return (
    <div className="navigation">
        <img src="img/./logo.png" alt="Logo de Kasa" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>À propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
