import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Error = () => {
  return (
    <div>
      <Navigation />
      <div className="divError">
        <img src="img/./imgError.png" alt="" />
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">Retourner sur la page d'accueil</NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Error;
