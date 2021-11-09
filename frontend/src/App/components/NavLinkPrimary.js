// react
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaFolder, FaEnvelope, FaBrain} from "react-icons/fa";

// hooks
import useHover from "../hooks/useHover";

const activeStyle = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderTop: "4px solid var(--blue-3)",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function NavLinkPrimary({ text, to }) {
  const [hovering, attrs] = useHover();

  const icons = {
    home: FaHome,
    about: FaUser,
    skills: FaBrain,
    projects: FaFolder,
    contact: FaEnvelope
  }

  const Icon = icons[text]
  const capitalizedName = capitalizeFirstLetter(text)

  return (
    <NavLink
      className="nav__link nav__primary--item"
      exact
      to={to === "/projects" ? '/' : to}
      activeStyle={activeStyle}
      {...attrs}
    >
      <div className="nav__hovering--text font-size-4 letter-spacing-sm">{capitalizedName}</div> 
    </NavLink>
  );
}

NavLinkPrimary.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
}