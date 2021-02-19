import React from "react";
import { NavLink } from "react-router-dom";

export default function BottomNavBar() {
    return (
      <div>
        <nav className="nav">
          <ul className="nav__list" role="menubar">
            <li className="nav__item">
              <NavLink exact to="/">Home</NavLink>
            </li>
            <li className="nav__item">
              <NavLink exact to="/badges">Badges</NavLink>
            </li>
            <li className="nav__item">
              <NavLink exact to="/stadiums">Stadiums</NavLink>
            </li>
            <li className="nav__item">
              <NavLink exact to="/photos">Photos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
};