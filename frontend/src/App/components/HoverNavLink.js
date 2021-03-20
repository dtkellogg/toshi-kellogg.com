import React from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { NavLink, withRouter } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFolder, FaEnvelope, } from "react-icons/fa";

const activeStyle = {
  color: "var(--blue-2)",
  fill: "var(--blue-4)",
  borderLeft: "4px solid var(--blue-3)",
  transition: "all 0.2s",
  // fontWeight: 900,
};

export default function HoverNavLink({ text, to, children }) {
  const [hovering, attrs] = useHover();

  const icons = {
    home: FaHome,
    about: FaUser,
    skills: FaCog,
    projects: FaFolder,
    contact: FaEnvelope
  }

  const Icon = icons[text]

  return (
    <NavLink
      to={to}
      className="nav__link text-size-5 letter-spacing-sm nav__list--item"
      activeStyle={activeStyle}
      {...attrs}
    >
      {hovering ? <div className="nav__hovering--text">{text}</div> : <Icon
        size={30}
        className="nav__icon"
      />}
    </NavLink>

    // <div className="nav__hovering">
    //   {hovering ? 
    //     <NavLink
    //       to={to}
    //       className="nav__link text-size-5 letter-spacing-sm"
    //       activeStyle={activeStyle}
    //       {...attrs}
    //     >
    //       <div className="nav__hovering--text">{text}</div></NavLink>
    //     : <NavLink
    //       to={to}
    //       className="nav__link text-size-5 letter-spacing-sm"
    //       activeStyle={activeStyle}
    //       {...attrs}
    //     >
    //       { children }</NavLink>
    //   }
    // </div>


    // <NavLink
    //   to={to}
    //   className="nav__link text-size-5 letter-spacing-sm"
    //   activeStyle={activeStyle}
    //   {...attrs}
    // >
    //   <div className="nav__hovering">
    //     {hovering ? <div className="nav__hovering--text">{text}</div> : [{ ...children }]}
    //   </div>
    //   {/* <div className="nav__hovering">
    //     <div style={hovering && {display: 'none', transition: 'all 0.2s'}}>{text}</div>
    //     <div>{children}</div>
    //   </div> */}
    // </NavLink>
  );
}