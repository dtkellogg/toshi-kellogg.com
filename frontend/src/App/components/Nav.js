import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFolder, FaEnvelope, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import HoverNavLink from "../components/HoverNavLink"
// hooks
import useHover from "../hooks/useHover"

const activeStyle = {
  color: "var(--blue-4)",
  fill: "var(--blue-4)",
  backgroundColor: "var(--old-blue-2-opacity-2)",
  borderLeft: "4px solid var(--blue-3)",
  // fontWeight: 900,
};

function Nav({ history }) {
  const [hoveringHome, setHoveringHome] = React.useState(false);
  const [hoveringAbout, setHoveringAbout] = React.useState(false);
  const [hoveringSkills, setHoveringSkills] = React.useState(false);
  const [hoveringProjects, setHoveringProjects] = React.useState(false);
  const [hoveringContact, setHoveringContact] = React.useState(false);

  return (
    <nav className="nav fadeInAnimated--6">
      <ul className="nav__list">

        <NavLink 
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          exact 
          to={"/"}
          activeStyle={activeStyle}
          onMouseOver={() => setHoveringHome(true)}
          onMouseLeave={() => setHoveringHome(false)}
        >
          {!hoveringHome
            ?
              <FaHome
                size={30}
                // fill={!activeStyle ? "var(--grey-6)" : "var(--blue-4)"}
                // fill="var(--grey-6)"
                className="nav__icon grey-11"
              />
            :
              <span className="nav__hovering--text">Home</span>
          }
        </NavLink>

        <NavLink 
          className="nav__list--item nav__link text-size-5 letter-spacing-sm"
          to={"/about"}
          activeStyle={activeStyle}
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
          activeStyle={activeStyle}
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
          activeStyle={activeStyle}
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
          activeStyle={activeStyle}
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
        </NavLink>


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
