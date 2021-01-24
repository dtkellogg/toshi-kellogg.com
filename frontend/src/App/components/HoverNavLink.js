import React from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { NavLink, withRouter } from "react-router-dom";

export default function HoverNavLink({ text, to, children }) {
  const [hovering, attrs] = useHover();

  return (
    <NavLink
      to={to}
      className="nav__link text-size-5 letter-spacing-sm"
      {...attrs}
    >
      <div className="nav__hovering">
        {hovering ? <div className="nav__hovering--text">{text}</div> : [{ ...children }]}
      </div>
      {/* <div className="nav__hovering">
        <div style={hovering && {display: 'none', transition: 'all 0.2s'}}>{text}</div>
        <div>{children}</div>
      </div> */}
    </NavLink>
  );
}