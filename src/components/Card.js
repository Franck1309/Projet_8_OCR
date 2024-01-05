import { NavLink } from "react-router-dom";

const Card = ({cover , id , title}) => {
 console.log(cover);
  return (
    <div className="boxCards">
      {/* Pour chaque article je creer une carte et un texte */}
        <div className="card" key={id}>
          <p className="title">{title}</p>
          <div className="gradient"></div>
          {/* Chaque article à son id , je créer un lien vers une page avec la data de l'article séléctionné  */}
          <NavLink to={`/locationChoice/${id}`} key={id}>
            <img src={cover} alt={title} />
          </NavLink>
        </div>
     
    </div>
  );
};

export default Card;

