// Axios est un façon de géré les CRUD plus facilement
import axios from "axios";
import React, { useEffect, useState } from "react";
// NavLink permet de faire des ancrages vers un chemin souhaité
import { NavLink } from "react-router-dom";

const Card = () => {
  // J'enregistre ma data articles dans une const dataArticles avec le hook useState
  const [dataArticles, setDataArticles] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setDataArticles(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

// j'appel getData une seule fois quand mon composant est appelé 
  useEffect(() => getData(), []);

  return (
    <div className="boxCards">
      {/* Pour chaque article je creer une carte et un texte */}
      {dataArticles.map((article) => (
        <div className="card" key={article.id}>
          <p className="title">{article.title}</p>
          {/* Chaque article à son id , je créer un lien vers une page avec la data de l'article séléctionné  */}
          <NavLink to={`/locationChoice/${article.id}`} key={article.id}>
            <img src={article.cover} alt={article.title} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Card;
