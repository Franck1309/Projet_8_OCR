import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [selectedLink, setSelectedLink] = useState(null);

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
            onClick={() => handleLinkClick("accueil")}
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
