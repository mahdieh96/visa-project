import React, { useState } from "react";
import "./MenuItem.css";
import { TourElement } from "./TourElement";
export const MenuItem = ({ item, clickedMenu }) => {
  const [show, setShow] = useState(false);
  const clickedHandler = (e) => {
    setShow(!show);
    //clickedMenu(e.target.id);
  };
  return (
    <li
      onClick={clickedHandler}
      className="menu__item"
      id={item.id}
      key={item.key}
    >
      {item.text}
      {show && item.items.length > 0 && (
        <ul>
          {console.log(item.items[0])}
          {item.items.map((element) => (
            <TourElement element={element} />
          ))}
        </ul>
      )}
    </li>
  );
};
