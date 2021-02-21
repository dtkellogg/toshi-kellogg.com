import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";
import { FaHome, FaUser, FaCog, FaFolder, FaEnvelope, FaInstagram, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import HoverNavLink from "../components/HoverNavLink"
// hooks
import useHover from "../hooks/useHover"

const activeStyle = {
  color: "var(--old-blue-2)",
  backgroundColor: "var(--old-blue-2-opacity-2)",
  border: "1px dotted var(--old-blue-2)",
  fontWeight: 900,
};

function Nav({ history }) {
  const [hovering, attrs] = useHover();

  return (
    <nav className="nav fadeInAnimated--6">
      <ul className="nav__list">
        <li className="nav__list--item">
          <HoverNavLink text={"Home"} to={"/"}>
            <FaHome
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item">
          <HoverNavLink text={"About"} to={"/about"}>
            <FaUser
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item">
          <HoverNavLink text={"Skills"} to={"/skills"}>
            <FaCog
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item">
          <HoverNavLink text={"Projects"} to={"/projects"}>
            <FaFolder
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </HoverNavLink>
        </li>

        <li className="nav__list--item" {...attrs}>
          <HoverNavLink text={"Contact"} to={"/contact"}>
            <FaEnvelope
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </HoverNavLink>
        </li>
      </ul>

      <ul className="nav__social-media-list">
        <li className="nav__social-media-list--item">
          <a href="#">
            <FaLinkedin
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </a>
        </li>
        <li className="nav__social-media-list--item">
          <a href="https://github.com/dtkellogg">
            <FaGithub
              size={30}
              fill="var(--grey-light-2)"
              className="social-media-icon grey-light-7"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Nav);
