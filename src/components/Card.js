import { NavLink } from "react-router-dom";

const Card = ({ cover, id, title }) => {

  return (
    <div>
      {/* Pour chaque article je creer une carte et un texte */}
      <div className="card" key={id}>
        <p className="title">{title}</p>
        {/* Chaque article à son id , je créer un lien vers une page avec la data de l'article séléctionné  */}
        <NavLink to={`/locationChoice/${id}`} key={id}>
          <div className="gradient"></div>
        </NavLink>
        <img src={cover} alt={title} />
      </div>
    </div>
  );
};

export default Card;
