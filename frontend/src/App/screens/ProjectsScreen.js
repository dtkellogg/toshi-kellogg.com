// react
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from '../components/Modal'

// actions
import { listProjects } from "../actions/projectActions"
import { modalToggleOpen, modalSetProject } from "../actions/modalActions"

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

// data
import projects from '../data/projects'


function ProjectsScreen() {
  const [project, setProject] = useState(""); // eslint-disable-line no-unused-vars

  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const { width } = useWindowDimensions()

  const handleModal = (e, project) => {
    e.preventDefault();
    setProject(project)

    dispatch(modalSetProject(project));
    dispatch(modalToggleOpen());
  };

  return (
    <div className="projects">
      {isOpen && <Modal project={project} />}
      <ul className="projects__container">
        {projects.map((project) => {
          const projectName = project.picture.split("/")[2].split(".")[0];
          console.log(`projectName: ${projectName}`);

          return (
            <li className={`projects__item projects__item--${project._id}`}>
              <div className="projects__card">
                <img
                  src={require(`../img/${projectName}.png`).default}
                  alt={`${project.name} img`}
                  className={`fadeInAnimated--${projectName} projects__photo projects__photo--${project._id}`}
                />
                <button
                  className="btn__project-details text-size-3"
                  onClick={(e) => handleModal(e, projects[project._id - 1])}
                >
                  Details
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
  
export default ProjectsScreen;
