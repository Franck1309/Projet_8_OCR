import React from "react";
// props info qui correspond à la data de chaque article
const InfoLocation = ({ info }) => {
  // fonction qui affiche des symboles étoile
  // prend en argument la note
  const renderStars = (rating) => {
    const stars = [];
    // boucle for pour créer les 5 étoiles
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
        <div className="tags">
          {info.tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="divProprio">
        <div className="infosProprio">
          <p>{info.host.name}</p>
          <img
            src={info.host.picture}
            alt="photo propriétaire"
            className="circle"
          />
        </div>
        <div className="divRating">
          {renderStars(parseInt(info.rating))}
        </div>
      </div>
    </div>
  );
};

export default InfoLocation;
