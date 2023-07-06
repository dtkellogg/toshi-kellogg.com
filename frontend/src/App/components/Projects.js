// react
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { modalToggleOpen, modalSetProject } from "../actions/modalActions"
import { listProjects } from "../actions/projectActions"

export default function Projects() {
  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projectList);

  const handleModal = (e, project) => {
    e.preventDefault();
    dispatch(modalSetProject(project));
    dispatch(modalToggleOpen(true));
  };

  useEffect(() => {
    dispatch(listProjects())
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  projects.sort((a, b) => {
    if (a._id < b._id) {
      return -1;
    }
    if (a._id > b._id) {
      return 1;
    }
    return 0;
  });

  // projects.filter(obj => obj.name !== "GitHub Battle");

  console.log(projects)

  if(projects) {
    return (
      <ul className="projects__container">
        {projects.map((project) => {
          const abbreviatedName = project.picture.split("/")[2].split(".")[0];
          const {_id, name} = project
          return (
            <li className={`projects__item projects__item--${_id} projects__card`} key={_id}>
              <img
                src={require(`../img/${abbreviatedName}.webp`).default}
                alt={`${name} img`}
                className={` projects__photo projects__photo--${_id}`}
              />
              <button
                className="projects__btn--details"
                onClick={(e) => handleModal(e, project)}
              >
                {name}
              </button>
            </li>
          )
        })}
      </ul>
    )
  } else return null
}