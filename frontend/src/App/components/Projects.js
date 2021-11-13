// react
import React from "react";
import { useDispatch } from "react-redux";

// data
import projects from '../data/projects'

// actions
import { modalToggleOpen, modalSetProject } from "../actions/modalActions"

export default function Projects({project, setProject}) {
  const dispatch = useDispatch();

  const handleModal = (e, project) => {
    e.preventDefault();
    setProject(project)
    dispatch(modalSetProject(project));
    dispatch(modalToggleOpen(true));
  };

  return (
    <ul className="projects__container">
      {projects.map((project) => {
        const abbreviatedName = project.picture.split("/")[2].split(".")[0];
        const {_id, name} = project
        return (
          <li className={`projects__item projects__item--${_id} projects__card`} key={_id}>
            <img
              src={require(`../img/${abbreviatedName}.png`).default}
              alt={`${name} img`}
              className={` projects__photo projects__photo--${_id}`}
            />
            <button
              className="btn__project-details"
              onClick={(e) => handleModal(e, projects[_id - 1])}
            >
              {name}
            </button>
          </li>
        )
      })}
    </ul>
  )
}