import React, { useState } from 'react';

const Collapse = ({ article }) => {
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
    <div className='containerCollapse'>

      <div className="divCollapse">
        <div className="collapse">
          <h2>{article.title}</h2>
          <i
            className={`fa-solid fa-chevron-up fa-2xl ${
              selectedChevrons.includes(1) ? "rotate" : ""
            }`}
            onClick={() => handleClick(1)}
          ></i>
        </div>
        <div className={`text ${selectedChevrons.includes(1) ? "show" : ""}`}>
          <div className="text-content">{article.text}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Collapse;
