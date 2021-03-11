import React from "react";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";
import { NavLink, withRouter } from "react-router-dom";

const activeStyle = {
  color: "var(--old-blue-2)",
  backgroundColor: "var(--old-blue-2-opacity-2)",
  // borderLeft: "2px solid var(--blue)",
  transition: "all 0.2s",
  fontWeight: 900,
};

export default function HoverNavLink({ text, to, children }) {
  const [hovering, attrs] = useHover();

  return (
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


    <NavLink
      to={to}
      className="nav__link text-size-5 letter-spacing-sm"
      activeStyle={activeStyle}
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