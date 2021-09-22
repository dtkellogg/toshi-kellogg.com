// react
import React from "react";
import PropTypes from "prop-types";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// hooks
import useHover from "../hooks/useHover";


function NavLinkSecondary({ text }) {
    const [hovering, attrs] = useHover();

    const icons = {
        github: FaGithub,
        linkedIn: FaLinkedin,
    }

    const Icon = icons[text]

    return (
        <a 
            className="nav__secondary--item" 
            href={text === "github" ? "www.linkedin.com/in/damian-toshiya-kellogg" : "https://www.linkedin.com/in/damian-kellogg-b9a719116"} 
            {...attrs}
        >
            <Icon
                size={30}
                fill={!hovering ? "var(--grey-6)" : "var(--grey-4"}
                className="nav__secondary--icon"
            />
        </a>
    );
}

export default React.memo(NavLinkSecondary)

NavLinkSecondary.propTypes = {
    text: PropTypes.string
}