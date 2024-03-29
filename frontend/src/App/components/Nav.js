// react
import React from "react";
import { withRouter } from "react-router-dom";

// components
import NavLinkPrimary from "../components/NavLinkPrimary"
import NavLinkSecondary from "../components/NavLinkSecondary"

const navItems = ["projects", "about", "contact"]
const navItemsSecondary = ['linkedIn', 'github']

function Nav() {

  return (
    <nav className="nav">

      <ul className="nav__primary">
        {navItems.map((el) => (
          <NavLinkPrimary
            key={el}
            to={`/${el}`} 
            text={el}
          />
        ))}
      </ul>

      <ul className="nav__secondary">
        {navItemsSecondary.map((el) => (
          <NavLinkSecondary
            key={el}
            to={`/${el}`}
            text={el}
          />
        ))}
      </ul>
      
    </nav>
  );
}

export default withRouter(Nav);