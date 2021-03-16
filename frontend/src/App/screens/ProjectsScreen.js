import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Modal from '../components/Modal'

// actions
import { listProjects } from "../actions/projectActions"
import { modalToggleOpen, modalSetProject } from "../actions/modalActions"

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

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
  const [project, setProject] = useState(""); // eslint-disable-line no-unused-vars

  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const projectList = useSelector((state) => state.projectList);
  const { loading, error, projects } = projectList; // eslint-disable-line no-unused-vars

  const { width } = useWindowDimensions()

  React.useEffect(() => {
    dispatch(listProjects());
  }, [dispatch]);

  const handleModal = (e, modalName) => {
    e.preventDefault();
    dispatch(modalSetProject(modalName));
    dispatch(modalToggleOpen());
  };

  var sortedProjects = projects.sort((a, b) => (a.name > b.name ? 1 : -1));

  if (error) {
    console.log(error);
  }

  if (isOpen) {
    console.log(`isOpen: ${isOpen}`);
  }


  if (sortedProjects) {
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
                className="btn__project-details text-size-3"
                onClick={() => handleModal(project.name)}
              >
                Details
              </button>
            </div>
          </div>
        )})} */}
          <div className="projects__item projects__item--1">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={kelloggTutoring}
                      alt="Kellogg Tutoring img"
                      className="projects__photo projects__photo--1 fadeInAnimated--0"
                    />
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[6]._id)}
                      // onClick={() => handleModal("Kellogg Tutoring")}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) :  */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[6]._id)}> */}
                {/* Kellogg Tutoring */}
              {/* </button> */}
              {/* } */}

            </div>
          </div>

          <div className="projects__item projects__item--2">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={nightMarket}
                      alt="Night Market img"
                      className="projects__photo projects__photo--2 fadeInAnimated--1"
                    />
                    {/* <span className="projects__details--title text-size-2">
                  Davis Night Market
                </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[0]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Night Market */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--3">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={thalassa}
                      alt="Thalassa Dive Resort img"
                      className="projects__photo projects__photo--3 fadeInAnimated--2"
                    />
                    {/* <span className="projects__details--title text-size-2">
                  Thalassa Resort
                </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[11]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Thalassa Dive Resort */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--4">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={indo2015}
                      alt="Indo 2015 img"
                      className="projects__photo projects__photo--4 fadeInAnimated--3"
                    />
                    {/* <span className="projects__details--title text-size-2">
                  Indonesia Trip (2015)
                </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[5]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Indonesia 2015 */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--5">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={hackerNewsClone}
                      alt="Hacker News Clone img"
                      className="projects__photo projects__photo--5 fadeInAnimated--0"
                    />
                    {/* <span className="projects__details--title text-size-2">
                  Hackernews Clone
                </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[2]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Hacker News Clone */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--6">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={githubBattle}
                      alt="Github Battle img"
                      className="projects__photo projects__photo--6 fadeInAnimated--1"
                    />
                    {/* <span className="projects__details--title text-size-2">
                  Github Battle
                </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[1]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Github Battle */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--7">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={tetris}
                      alt="Tetris img"
                      className="projects__photo projects__photo--7 fadeInAnimated--2"
                    />
                    {/* <span className="projects__details--title text-size-2">Tetris</span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[10]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Tetris */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--8">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={hangman}
                      alt="Hangman img"
                      className="projects__photo projects__photo--8 fadeInAnimated--3"
                    />
                    {/* <span className="projects__details--title text-size-2">Hangman</span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[3]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Hangman */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--9">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={omnifood}
                      alt="Omnifood img"
                      className="projects__photo projects__photo--9 fadeInAnimated--0"
                    />
                    {/* <span className="projects__details--title text-size-2">Omnifood</span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[9]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Omnifood */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--10">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={nexter}
                      alt="Nexter img"
                      className="projects__photo projects__photo--10 fadeInAnimated--1"
                    />
                    {/* <span className="projects__details--title text-size-2">Nexter</span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[8]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Nexter */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--11">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={natours}
                      alt="Natours img"
                      className="projects__photo projects__photo--11 fadeInAnimated--2"
                    />
                    {/* <span className="projects__details--title text-size-2">Natours</span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[7]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Natours */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>

          <div className="projects__item projects__item--12">
            <div className="projects__card">
              {/* {width > 550  */}
                {/* ? ( */}
                  {/* <> */}
                    <img
                      src={hashBasketball}
                      alt="Hashbasketball img"
                      className="projects__photo projects__photo--12 fadeInAnimated--3"
                    />
                    {/* <span className="projects__details--title text-size-2"> */}
                    {/* Hash Basketball */}
                    {/* </span> */}
                    {/* <div className="projects__details"> */}
                    <button
                      className="btn__project-details text-size-3"
                      onClick={(e) => handleModal(e, sortedProjects[4]._id)}
                    >
                      Details
                    </button>
                  {/* </> */}
                {/* ) : */}
                {/* <button className="" onClick={(e) => handleModal(e, sortedProjects[1]._id)}> */}
                  {/* Hashbasketball */}
                {/* </button> */}
              {/* } */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsScreen;
