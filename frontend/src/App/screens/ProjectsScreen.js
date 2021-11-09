// react
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Typewriter from "typewriter-effect"

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
    setProject(project)
    dispatch(modalSetProject(project));
    dispatch(modalToggleOpen());
  };

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="projects">
      
      <section className="home__container home__container--left">
        <div>
          <span className="fadeInAnimated--1 home__text--im text-size-1" text-size-0>Hello, I'm</span>
          <span className="fadeInAnimated--1 home__text--toshi text-size-1">Toshi.</span>
        </div>
        
        {width > 608 ?
          <div>
            <div className="fadeInAnimated--1-5 home__text home__text--5 text-size-2-5">
              <span>I'm a web developer based in the Bay Area, specializing in</span> 
              {<Typewriter
                delay={4000}
                wrapperClassName="test"
                options={{
                  strings: [' MERN stacks.', ' ReactJS.', ' NodeJS.', " clean code.", " SASS.", " git.", " HTML5.", " CSS3."],
                  autoStart: true,
                  loop: true,
                }} 
              />}
            </div>
          </div>
        : <div>
            <div className="fadeInAnimated--1-5 home__text home__text--5 text-size-2-5">
                <span>I'm a web developer based in the Bay Area</span> 
                <br />
              <div style={{display: 'flex'}}>specializing in 
                {<Typewriter
                  delay={4000}
                  wrapperClassName="test"
                  options={{
                    strings: [' MERN stacks.', ' ReactJS.', ' NodeJS.', " clean code.", " SASS.", " git."],
                    autoStart: true,
                    loop: true,
                  }} 
                />}
                </div>
            </div>
          </div>
        }
      </section>

      {isOpen && <Modal project={project} /> }

      <ul className="projects__container">
        {projects.map((project) => {
          const abbreviatedName = project.picture.split("/")[2].split(".")[0];
          const {_id, name} = project

          return (
            <li className={`projects__item projects__item--${_id} projects__card fadeInAnimated--${abbreviatedName}`} key={_id}>
              <img
                src={require(`../img/${abbreviatedName}.png`).default}
                alt={`${name} img`}
                className={` projects__photo projects__photo--${_id}`}
              />
              <button
                className="btn__project-details text-size-4"
                onClick={(e) => handleModal(e, projects[_id - 1])}
              >
                {name}
              </button>
            </li>
          )
        })}
      </ul>
      
    </section>
  )
}
  
export default ProjectsScreen;