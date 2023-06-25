import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Menu } from "../../Menu/Menu";
export const Header = () => {
  const menuItems = [
    { text: "International Services", items: [], id: 0 },
    { text: "Visas", items: [], id: 1 },
    { text: "Events & Tours", items: [], id: 2 },
    { text: "About", items: [], id: 3 },
    { text: "Find out more", items: [], id: 4 },
  ];
  const [menu, setMenu] = useState(menuItems);
  useEffect(() => {
    axios
      .get("http://157.90.138.115:8345/api/home/get_header_footer_menu")
      .then((response) => {
        setMenu((prev) => {
          prev[2].items = [...response.data.data.menu_tour];
          let temp = [...response.data.data.menu_column_service][0];
          delete temp.id;
          let arr = [];
          for (let i in temp) {
            arr.push(temp[i]);
          }
          prev[0].items = [...arr];
          console.log(prev[0].items);
          return prev;
        });
      });
  }, []);

  return (
    <div>
      <Menu items={menu} />
    </div>
  );
};
