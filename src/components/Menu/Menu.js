import React from "react";
import "./Menu.css";
import { MenuItem } from "./MenuItem/MenuItem";
export const Menu = ({ items, getItemHandler }) => {
  return (
    <ul className="menu">
      {items.map((item) => (
        <MenuItem
          item={item}
          clickedMenu={getItemHandler}
          id={item.id}
          key={item.key}
        />
      ))}
    </ul>
  );
};
