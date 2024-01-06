import React from "react";
import Tag from "./Tag";
// props info qui correspond à la data de chaque article
const InfoLocation = ({ info }) => {

  // prend en argument la note
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      // Si index d'étoiles est inferieur ou égale à la note alors j'ajoute étoile pleine sinon étoile vide
      const starClass = i <= rating ? "fas fa-star" : "far fa-star";
      stars.push(<i key={i} className={`${starClass}`} />);
    }
    return stars;
  };

  return (
    <div className="container">
      <div className="infosLocation">
        <h1>{info.title}</h1>
        <p>{info.location}</p>
        <Tag tags={info.tags} />
      </div>
      <div className="divProprio">
        <div className="infosProprio">
          <p className="nomProprio">{info.host.name}</p>
          <img
            src={info.host.picture}
            alt="photo propriétaire"
            className="circle"
          />
        </div>
        <div className="divRating">{renderStars(parseInt(info.rating))}</div>
      </div>
    </div>
  );
};

export default InfoLocation;
