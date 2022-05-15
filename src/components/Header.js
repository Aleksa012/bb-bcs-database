import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/characters">Characters</NavLink>
          <NavLink to="/about">About</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
