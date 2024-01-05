import React, { useState } from "react";

const Collapse = ({ text, title }) => {

  const [selectedChevrons, setSelectedChevrons] = useState(false);

  return (
    <div className="containerCollapse">
      <div className="divCollapse">
        <div className="collapse">
          <h2>{title}</h2>
          <i
            className={`fa-solid fa-chevron-up fa-2xl ${
              selectedChevrons ? "rotate" : ""
            }`}
            onClick={() => setSelectedChevrons(!selectedChevrons)}
          ></i>
        </div>
        <div className={`text ${selectedChevrons ? "show" : ""}`}>
          <div className="text-content">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
