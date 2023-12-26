import React, { useState } from "react";
  // passe en props le contenu du collapse soit "text" et "title" 
const Collapse = ({ text , title}) => {
  // useState enregistre les index de chevrons séléctionné dans un tableau
  const [selectedChevrons, setSelectedChevrons] = useState([]);
  // Fonction qui sera appelé au click d'un chevron
  const chevronClicked = (index) => {
  // enregistre dans le state l'index du chevron cliqué
    const isClicked = selectedChevrons.includes(index);
  // retire du tableau l'index si le chevron est déja enregistré sinon l'ajoute au tableau
    if (isClicked) {
      setSelectedChevrons(
        selectedChevrons.filter((chevronInState) => chevronInState !== index)
      );
    } else {
      setSelectedChevrons([...selectedChevrons, index]);
    }
  }; 
  
  return (
    <div className="containerCollapse">
      <div className="divCollapse">
        <div className="collapse">
          <h2>{title}</h2>
          <i
            className={`fa-solid fa-chevron-up fa-2xl ${
              selectedChevrons.includes(1) ? "rotate" : ""
            }`}
            onClick={() => chevronClicked(1)}
          ></i>
        </div>
        <div className={`text ${selectedChevrons.includes(1) ? "show" : ""}`}>
          <div className="text-content">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
