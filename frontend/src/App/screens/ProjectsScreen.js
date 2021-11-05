// react
import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
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
  const [showTypewriter1, setShowTypewriter1] = useState(true)
  const [showTypewriter2, setShowTypewriter2] = useState(false)

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

    window.setTimeout(() => {
      setShowTypewriter1(false)
      setShowTypewriter2(true)
    }, 2500);
  }, [])

  return (
    <section className="projects">
      
      <section className="home__container home__container--left">
      <div>
        {/* <span className="fadeInAnimated--0 home__text home__text--1 text-size-0">Hello,</span> */}
        <span className="fadeInAnimated--1 home__text--im text-size-1" text-size-0>Hello, I'm</span>
        <span className="fadeInAnimated--1 home__text--toshi text-size-1">Toshi.</span>
      </div>
      {/* <div className="fadeInAnimated--2-25 home__text home__text--3 text-size-2">I like to build JavaScript applications.</div> */}
      <div className="fadeInAnimated--1-5 home__text home__text--5 text-size-2-5">I'm a web developer based in the Bay Area, specializing in {<Typewriter
        // cursorClassName="hello"
        delay={4000}
        wrapperClassName="test"
        // loop={true}
        // onInit={(typewriter) => {
        //   typewriter
        //     // .stop()
        //     .typeString("I'm a web developer based in the Bay Area specializing in MERN stacks.")
        //     .pauseFor(1000)
        //     .deleteChars(12)
        //     .typeString("ReactJS.")
        //     .pauseFor(1200)
        //     .deleteChars(8)
        //     .typeString("NodeJS.")
        //     .pauseFor(800)
        //     .deleteChars(7)
        //     .typeString("clean code.")
        //     .pauseFor(1150)
        //     .deleteChars(11)
        //     .typeString("communication.")
        //     .pauseFor(1100)
        //     .deleteChars(14)
        //     .typeString("teamwork.")
        //     .pauseFor(1100)
        //     .deleteChars(1)
        //     .typeString(" with your mom. 💥")
        //     .deleteChars(26)
        //     .typeString("MERN stacks.")
        //     .changeDeleteSpeed(50000)
        //     .start()
        // }}
        options={{
          strings: [' ReactJS.', ' NodeJS.', " clean code.", " communication."],
          autoStart: true,
          loop: true,
        }} 
      />
      }</div>

    {/* <div className="text-size-1">
      {showTypewriter1 ? <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Hello I'm Toshi.")
            .pauseFor(5000)
            .stop()
            .start()
        }} 
      /> : <span>Hello I'm Toshi.</span>}
      </div> */}
      <div className="text-size-2-5">
      
    {/* <Typewriter
        options={{
          strings: ["MERN stacks", 'React JS', 'Node JS', 'JavaScript'],
          autoStart: true,
          loop: true,
        }} 
      /> */}
      </div>
    </section>
  
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