// react
import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'
import useHover from "../hooks/useHover";


export default function NavLinkSecondary({ text }) {
    const [hovering, attrs] = useHover();

    const { width } = useWindowDimensions()

    // const iconData = {
    //     github: {
    //         icon: FaGithub,
    //         link: "https://github.com/dtkellogg"},
    //     linkedIn: {
    //         icon: FaLinkedin,
    //         link: "#"
    //     }
    // }

    const icons = {
        github: FaGithub,
        linkedIn: FaLinkedin,
        
    }

    const Icon = icons[text]

    return (
        <a className="nav__secondary--item" href={text === "github" ? "https://github.com/dtkellogg" : "https://google.com"} {...attrs}>
            <Icon
                size={30}
                fill={!hovering ? "var(--grey-6)" : "var(--grey-4"}
                className="nav__secondary--icon"
            />
        </a>
    );
}