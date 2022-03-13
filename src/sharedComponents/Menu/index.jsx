import React, { useState } from "react";

export default function Menu({ menuName, menuItems }) {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p className="navbar-brand">{menuName}</p>
      <ul className="navbar-nav mr-auto">
        {menuItems.map((item) => (
          <li className="nav-link">
            <p
              className={"nav-link" + (activeItem === item ? " active" : "")}
              onClick={function () {
                setActiveItem(item);
              }}
            >
              {item}
            </p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
