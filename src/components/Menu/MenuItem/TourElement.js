import React from "react";

export const TourElement = ({ element }) => {
  return (
    <div>
      {element && (
        <li>
          <img src={element?.icon} alt={element?.tag} />
          <h3>{element?.title_latin}</h3>
        </li>
      )}
    </div>
  );
};
