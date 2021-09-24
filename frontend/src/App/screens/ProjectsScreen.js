// react
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import Modal from '../components/Modal'

// actions
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

    console.log(project)
    setProject(project)
    dispatch(modalSetProject(project));
    dispatch(modalToggleOpen());
  };

  return (
    <div className="projects">

      {/* <CSSTransition in={isOpen} timeout={300} className="modal-transition" > */}
        {/* <Modal project={project} /> */}
      {/* </CSSTransition> */}
      {/* {isOpen && <Modal project={project} 
        style={isOpen && { animation: 'fadeIn 1s'}}
      />} */}

      {isOpen && <Modal project={project} /> }


      <ul className="projects__container">
        {projects.map((project) => {
          const abbreviatedName = project.picture.split("/")[2].split(".")[0];
          const {_id, name} = project

          return (
            <li className={`projects__item projects__item--${_id}`} key={_id}>
              <div className="projects__card">
                <img
                  src={require(`../img/${abbreviatedName}.png`).default}
                  alt={`${name} img`}
                  className={`fadeInAnimated--${abbreviatedName} projects__photo projects__photo--${_id}`}
                />
                <button
                  className="btn__project-details text-size-4"
                  onClick={(e) => handleModal(e, projects[_id - 1])}
                >
                  {name}
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