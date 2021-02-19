import React from "react";
import { Link } from "react-router-dom";

export default function BottomNavBar() {
    return (
      <div>
        <nav className="nav">
          <ul className="nav__list" role="menubar">
            <li className="nav__item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__item">
              <Link to="/badges">Badges</Link>
            </li>
            <li className="nav__item">
              <Link to="/stadiums">Stadiums</Link>
            </li>
            <li className="nav__item">
              <Link to="/photos">Photos</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
};