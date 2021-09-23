// react
import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFolder, FaEnvelope, } from "react-icons/fa";

// hooks
import useHover from "../hooks/useHover";
import useWindowDimensions from '../hooks/useWindowDimensions'
import useCapitalizeFirstLetter from '../hooks/useCapitalizeFirstLetter'

// active styles
const activeStyleOver950 = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderLeft: "4px solid var(--blue-3)",
};

const activeStyleUnder950 = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderTop: "4px solid var(--blue-3)",
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function NavLinkPrimary({ text, to }) {
  const [hovering, attrs] = useHover();

  const { width } = useWindowDimensions()

  const icons = {
    home: FaHome,
    about: FaUser,
    skills: FaCog,
    projects: FaFolder,
    contact: FaEnvelope
  }

  const Icon = icons[text]
  const capitalizedName = capitalizeFirstLetter(text)

  return (
    <NavLink
      className="nav__link nav__primary--item"
      exact
      to={to === "/home" ? '/' : to}
      activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
      {...attrs}
    >
      {hovering ? 
        <div className="nav__hovering--text text-size-5 letter-spacing-sm">{capitalizedName}</div> 
        : 
        <Icon
          size={30}
          className="nav__icon"
        />}
    </NavLink>
  );
}

NavLinkPrimary.propTypes = {
  text: PropTypes.string,
  to: PropTypes.string
}