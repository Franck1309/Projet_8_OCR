import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [dataArticles, setDataArticles] = useState([]);

  const getData = () => {
    axios
      .get("http://localhost:3004/articles")
      .then((res) => setDataArticles(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => getData(), []);

  return (
    <div className="boxCards">
      {dataArticles.map((article) => (
        <div className="card" key={article.id}>
          <p className="title">{article.title}</p>
          <NavLink to="/locationChoice">
            <img src={article.cover} alt={article.title} />
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Card;
