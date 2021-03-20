import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFolder, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

// components
import HoverNavLink from "../components/HoverNavLink"

// hooks
import useHover from "../hooks/useHover"
import useWindowDimensions from '../hooks/useWindowDimensions'

const activeStyleOver950 = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderLeft: "4px solid var(--blue-3)",
  transition: "all 0.01s"
};

const activeStyleUnder950 = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  borderTop: "5px solid var(--blue-3)",
  transition: "all 0.01s"
};

const navItems = ["home", "about", "skills", "projects", "contact"]

function Nav({ history }) {
  // const [hoveringHome, setHoveringHome] = useState(false);
  // const [hoveringAbout, setHoveringAbout] = useState(false);
  // const [hoveringSkills, setHoveringSkills] = useState(false);
  // const [hoveringProjects, setHoveringProjects] = useState(false);
  // const [hoveringContact, setHoveringContact] = useState(false);

  const { width } = useWindowDimensions()

  return (
    <nav className="nav fadeInAnimated--6">
      <ul className="nav__list">
        {navItems.map((el) => (
          <HoverNavLink 
            to={`/${el}`} 
            text={el}
            className=""
          />
        ))}

        {/* <NavLink
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          exact
          to={"/"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringHome(true)}
          onMouseLeave={() => setHoveringHome(false)}
        >
          {!hoveringHome
            ?
            <FaHome
              size={30}
              className="nav__icon grey-11"
            />
            :
            <span className="nav__hovering--text">Home</span>
          }
        </NavLink> */}

        {/* <NavLink 
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          exact 
          to={"/"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringHome(true)}
          onMouseLeave={() => setHoveringHome(false)}
        >
          {!hoveringHome
            ?
              <FaHome
                size={30}
                className="nav__icon grey-11"
              />
            :
              <span className="nav__hovering--text">Home</span>
          }
        </NavLink>

        <NavLink 
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          to={"/about"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringAbout(true)}
          onMouseLeave={() => setHoveringAbout(false)}
        >
          {!hoveringAbout
            ?
            <FaUser
              size={30}
              className="nav__icon grey-11"
            />
            :
            <span className="nav__hovering--text">About</span>
          }
        </NavLink>

        <NavLink
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          to={"/skills"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringSkills(true)}
          onMouseLeave={() => setHoveringSkills(false)}
        >
          {!hoveringSkills
            ?
            <FaCog
              size={30}
              className="nav__icon grey-11"
            />
            :
            <span className="nav__hovering--text">Skills</span>
          }
        </NavLink>

        <NavLink
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          to={"/projects"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringProjects(true)}
          onMouseLeave={() => setHoveringProjects(false)}
        >
          {!hoveringProjects
            ?
            <FaFolder
              size={30}
              className="nav__icon grey-11"
            />
            :
            <span className="nav__hovering--text">Projects</span>
          }
        </NavLink>

        <NavLink
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          to={"/contact"}
          activeStyle={width > 950 ? activeStyleOver950 : activeStyleUnder950}
          onMouseOver={() => setHoveringContact(true)}
          onMouseLeave={() => setHoveringContact(false)}
        >
          {!hoveringContact
            ?
            <FaEnvelope
              size={30}
              className="nav__icon grey-11"
            />
            :
            <span className="nav__hovering--text">Contact</span>
          }
        </NavLink> */}


        {/* <li className="nav__list--item">
          <HoverNavLink text={"Skills"} to={"/skills"}>
            <FaCog
              size={30}
              fill="var(--grey-6)"
              className="nav__icon grey-11"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item">
          <HoverNavLink text={"Projects"} to={"/projects"}>
            <FaFolder
              size={30}
              fill="var(--grey-6)"
              className="nav__icon grey-11"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item">
          <HoverNavLink text={"Contact"} to={"/contact"}>
            <FaEnvelope
              size={30}
              fill="var(--grey-6)"
              className="nav__icon grey-11"
            />
          </HoverNavLink>
        </li> */}
      </ul>

      <ul className="nav__social-media-list">
        <li className="nav__social-media-list--item">
          <a href="#">
            <FaLinkedin
              size={30}
              fill="var(--grey-6)"
              className="nav__icon grey-11"
            />
          </a>
        </li>
        <li className="nav__social-media-list--item">
          <a href="https://github.com/dtkellogg">
            <FaGithub
              size={30}
              fill="var(--grey-6)"
              className="nav__icon grey-11"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Nav);
