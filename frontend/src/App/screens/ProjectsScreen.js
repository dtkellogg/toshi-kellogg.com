import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from '../components/Modal'

// actions
import { listProjects } from "../actions/projectActions"
import { modalToggleOpen, modalSetProject } from "../actions/modalActions"

// images
import thalassa from '../img/thalassa.png'
// import budgetTracker from '../img/budgetTracker.png'
import kelloggTutoring from '../img/kelloggtutoring.png'
// import lightsOut from '../img/lights-out.png'
import tetris from '../img/tetris.png'
import hangman from '../img/hangman.png'
import nightMarket from '../img/nightMarket.png'
import indo2015 from '../img/indonesia2015.png'
import omnifood from '../img/omnifood.png'
import nexter from '../img/nexter.png'
import natours from '../img/natours.png'
import hashBasketball from '../img/hashBasketball.png'
import hackerNewsClone from '../img/hackerNewsClone.png'
import githubBattle from '../img/githubBattle.png'


function ProjectsScreen() {
  // const [modalOpen, setModalOpen] = useState(false)
  const [project, setProject] = useState("") // eslint-disable-line no-unused-vars

  const dispatch = useDispatch()

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList; // eslint-disable-line no-unused-vars

  const handleModal = (e, modalName) => {
    e.preventDefault();
    dispatch(modalSetProject(modalName))
    dispatch(modalToggleOpen())
  }

  React.useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  // React.useEffect(() => {
  //   console.log(projects);
  // }, [projects]);

  if(error) {
    console.log(error);
  }

  return (
    <div className="projects">
      {isOpen && <Modal project={project} />}
      <div
        className="projects__container"
        // style={modalOpen ? { opacity: 0.7 } : { opacity: 1 }}
      >
        {/* {projects.map((project, i) => {
          console.log(`project.picture: ${project.picture}`)
          return (
          <div className={`projects__item projects__item--${i}`}>
            <img
              src={project.picture}
              alt={`${project.name} img`}
              className={`fadeInAnimated--${i} projects__photo projects__photo--${i}`}
            />
            <span className="projects__details--title text-size-2">
              {project.name}
            </span>
            <div className="projects__details">
              <button
                className="btn__expand-project-details"
                onClick={() => handleModal(project.name)}
              >
                Details
              </button>
            </div>
          </div>
        )})} */}
        <div className="projects__item projects__item--1">
          <div className="projects__card">
            <img
              src={kelloggTutoring}
              alt="Kellogg Tutoring img"
              className="projects__photo projects__photo--1 fadeInAnimated--1"
            />
            {/* <span className="projects__details--title text-size-2">
              Kellogg Tutoring
            </span> */}
            {/* <div className="projects__details"> */}
              <button
                className="btn__expand-project-details"
                onClick={(e) => handleModal(e, projects[0]._id)}
                // onClick={() => handleModal("Kellogg Tutoring")}
              >
                Details
              </button>
            {/* </div> */}
            <span className="projects__card--focus-border"></span>
          </div>
        </div>

        <div className="projects__item projects__item--2">
          <div className="projects__card">
          <img
            src={nightMarket}
            alt="Night Market img"
            className="projects__photo projects__photo--2 fadeInAnimated--2"
          />
          {/* <span className="projects__details--title text-size-2">
            Davis Night Market
          </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[1]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--3">
          <div className="projects__card">
          <img
            src={thalassa}
            alt="Thalassa Dive Resort img"
            className="projects__photo projects__photo--3 fadeInAnimated--3"
          />
          {/* <span className="projects__details--title text-size-2">
            Thalassa Resort
          </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[2]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--4">
          <div className="projects__card">
          <img
            src={indo2015}
            alt="Indo 2015 img"
            className="projects__photo projects__photo--4 fadeInAnimated--4"
          />
          {/* <span className="projects__details--title text-size-2">
            Indonesia Trip (2015)
          </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[3]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--5">
          <div className="projects__card">
          <img
            src={hackerNewsClone}
            alt="Hacker News Clone img"
            className="projects__photo projects__photo--5 fadeInAnimated--1"
          />
          {/* <span className="projects__details--title text-size-2">
            Hackernews Clone
          </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[4]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--6">
          <div className="projects__card">
          <img
            src={githubBattle}
            alt="Github Battle img"
            className="projects__photo projects__photo--6 fadeInAnimated--2"
          />
          {/* <span className="projects__details--title text-size-2">
            Github Battle
          </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[5]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--7">
          <div className="projects__card">
          <img
            src={tetris}
            alt="Tetris img"
            className="projects__photo projects__photo--7 fadeInAnimated--3"
          />
          {/* <span className="projects__details--title text-size-2">Tetris</span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[6]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--8">
          <div className="projects__card">
          <img
            src={hangman}
            alt="Hangman img"
            className="projects__photo projects__photo--8 fadeInAnimated--4"
          />
          {/* <span className="projects__details--title text-size-2">Hangman</span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[7]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--9">
          <div className="projects__card">
          <img
            src={omnifood}
            alt="Omnifood img"
            className="projects__photo projects__photo--9 fadeInAnimated--1"
          />
          {/* <span className="projects__details--title text-size-2">Omnifood</span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[8]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--10">
          <div className="projects__card">
          <img
            src={nexter}
            alt="Nexter img"
            className="projects__photo projects__photo--10 fadeInAnimated--2"
          />
          {/* <span className="projects__details--title text-size-2">Nexter</span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[9]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--11">
          <div className="projects__card">
          <img
            src={natours}
            alt="Natours img"
            className="projects__photo projects__photo--11 fadeInAnimated--3"
          />
          {/* <span className="projects__details--title text-size-2">Natours</span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[10]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>

        <div className="projects__item projects__item--12">
          <div className="projects__card">
          <img
            src={hashBasketball}
            alt="Hashbasketball img"
            className="projects__photo projects__photo--12 fadeInAnimated--4"
          />
          {/* <span className="projects__details--title text-size-2"> */}
            {/* Hash Basketball */}
          {/* </span> */}
          {/* <div className="projects__details"> */}
            <button
              className="btn__expand-project-details"
              onClick={(e) => handleModal(e, projects[11]._id)}
            >
              Details
            </button>
          {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsScreen;
