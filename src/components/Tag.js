import React from "react";

const Tag = ({tags}) => {
 
  return (
    <div>
      <div className="tags">
        {tags.map((tag , id) => (
          <span key={id} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tag;
