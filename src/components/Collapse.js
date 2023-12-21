import React, { useState } from "react";

const Collapse = () => {
  const dataCollapse = [
    {
      title: "Fiabilité",
      text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laisssant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipres de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  const [selectedChevrons, setSelectedChevrons] = useState([]);
  const handleClick = (index) => {
    const isSelected = selectedChevrons.includes(index);
    if (isSelected) {
      setSelectedChevrons(
        selectedChevrons.filter((selectedIndex) => selectedIndex !== index)
      );
    } else {
      setSelectedChevrons([...selectedChevrons, index]);
    }
  };

  return (
    <div>
      {dataCollapse.map((info, index) => (
        <div key={info.title} className="divCollapse">
          <div className="collapse">
            <h2>{info.title}</h2>
            <i
              className={`fa-solid fa-chevron-up fa-2xl ${
                selectedChevrons.includes(index) ? "rotate" : ""
              }`}
              onClick={() => handleClick(index)}
            ></i>
          </div>
          <div className={`text ${selectedChevrons.includes(index) ? "show" : ""}`}   >
             <div className="text-content"> {info.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collapse;