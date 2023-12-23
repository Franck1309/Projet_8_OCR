import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
// enregistre le lien séléctionné dans ma state initialisé à null
  const [selectedLink, setSelectedLink] = useState(null);

// fonction en argument link qui passe quelle <li> est séléctionne dans ma state  
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  return (
    <div className="navigation">
      <img src="/img/logo.png" alt="logo Kasa" />

      <ul>
        <li>
          <NavLink
            to="/"
            // au click je passe l'argument accueil à ma fonction
            onClick={() => handleLinkClick("accueil")}
            // si ma state contient accueil , j'ajoute la classe active
            className={selectedLink === "accueil" ? "active" : ""}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => handleLinkClick("about")}
            className={selectedLink === "about" ? "active" : ""}
          >
            À propos
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
