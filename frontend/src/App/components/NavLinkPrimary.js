// react
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// hooks
import useHover from "../hooks/useHover";
import useCapitalizeFirstLetter from "../hooks/useCapitalizeFirstLetter"

const activeStyle = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderTop: "4px solid var(--blue-3)",
};

export default function NavLinkPrimary({ text, to }) {
  const [ , attrs] = useHover();

  const capitalizedName = useCapitalizeFirstLetter(text)

  return (
    <NavLink
      className="nav__link nav__primary--item"
      exact
      to={to === "/projects" ? '/' : to}
      activeStyle={activeStyle}
      {...attrs}
    >
      <div className="nav__hovering--text letter-spacing-sm">{capitalizedName}</div> 
    </NavLink>
  );
}

NavLinkPrimary.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
}