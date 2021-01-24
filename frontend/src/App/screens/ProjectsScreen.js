import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from '../components/Modal'

// images
import thalassa from '../img/thalassa.png'
import budgetTracker from '../img/budgetTracker.png'
import kelloggTutoring from '../img/kelloggtutoring.png'
import lightsOut from '../img/lights-out.png'
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
  const [modalOpen, setModalOpen] = useState(false)
  const [project, setProject] = useState("")

  const dispatch = useDispatch()

  // const isModalOpen = useSelector((state) => state.isModalOpen);
  // const { loading, error, userInfo } = isModalOpen;

  const handleModal = (project) => {
    // dispatch(modalOpen(modalOpen))
    setModalOpen(!modalOpen)
    setProject(project)
    console.log(`modalOpen: ${modalOpen}`)
  }

  return (
    <div className="projects">
      {modalOpen && <Modal project={project} />}
      <div
        className="projects__container"
        // style={modalOpen ? { opacity: 0.7 } : { opacity: 1 }}
      >
        <div className="projects__item projects__item--1">
          <img
            src={kelloggTutoring}
            alt="Kellogg Tutoring img"
            className="fadeInAnimated--1 projects__photo projects__photo--1"
          />
          <span className="projects__details--title text-size-2">
            Kellogg Tutoring
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Kellogg Tutoring")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--2">
          <img
            src={nightMarket}
            alt="Night Market img"
            className="projects__photo projects__photo--2 fadeInAnimated--1"
          />
          <span className="projects__details--title text-size-2">
            Davis Night Market
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("The Davis Night Market")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--3">
          <img
            src={thalassa}
            alt="Thalassa Dive Resort img"
            className="projects__photo projects__photo--3 fadeInAnimated--1"
          />
          <span className="projects__details--title text-size-2">
            Thalassa Resort
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Thalassa Dive Resort")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--4">
          <img
            src={indo2015}
            alt="Indo 2015 img"
            className="projects__photo projects__photo--4 fadeInAnimated--1"
          />
          <span className="projects__details--title text-size-2">
            Indonesia Trip (2015)
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Indonesia Trip (2015)")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--5">
          <img
            src={hackerNewsClone}
            alt="Hacker News Clone img"
            className="projects__photo projects__photo--5 fadeInAnimated--2"
          />
          <span className="projects__details--title text-size-2">
            Hackernews Clone
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("HackerNews Clone")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--6">
          <img
            src={githubBattle}
            alt="Github Battle img"
            className="projects__photo projects__photo--6 fadeInAnimated--2"
          />
          <span className="projects__details--title text-size-2">
            Github Battle
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Github Battle")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--7">
          <img
            src={tetris}
            alt="Tetris img"
            className="projects__photo projects__photo--7 fadeInAnimated--2"
          />
          <span className="projects__details--title text-size-2">Tetris</span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Tetris")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--8">
          <img
            src={hangman}
            alt="Hangman img"
            className="projects__photo projects__photo--8 fadeInAnimated--2"
          />
          <span className="projects__details--title text-size-2">Hangman</span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Hangman")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--9">
          <img
            src={omnifood}
            alt="Omnifood img"
            className="projects__photo projects__photo--9 fadeInAnimated--3"
          />
          <span className="projects__details--title text-size-2">Omnifood</span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Omnifood")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--10">
          <img
            src={nexter}
            alt="Nexter img"
            className="projects__photo projects__photo--10 fadeInAnimated--3"
          />
          <span className="projects__details--title text-size-2">Nexter</span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Nexter")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--11">
          <img
            src={natours}
            alt="Natours img"
            className="projects__photo projects__photo--11 fadeInAnimated--3"
          />
          <span className="projects__details--title text-size-2">Natours</span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Natours")}
            >
              Details
            </button>
          </div>
        </div>

        <div className="projects__item projects__item--12">
          <img
            src={hashBasketball}
            alt="Hashbasketball img"
            className="projects__photo projects__photo--12 fadeInAnimated--3"
          />
          <span className="projects__details--title text-size-2">
            Hash Basketball
          </span>
          <div className="projects__details">
            <button
              className="btn__expand-project-details"
              onClick={() => handleModal("Hash Basketball")}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsScreen;
