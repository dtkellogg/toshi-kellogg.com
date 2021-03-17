import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {FaReact, FaRedux, FaReactRouter, FaNodeJs, FaCss3Alt, FaSass} from "react-icons/fa"

// actions
import { modalToggleOpen } from "../actions/modalActions";

// videos
// import kelloggtutoring__video from '../videos/kelloggtutoring.mov'
// import davisnightmarket__video from '../videos/nightmarket.mov'

// constants
import { MODAL_SETPROJECT_RESET } from '../constants/modalConstants'

const icons = {
  "React": "vscode-icons:file-type-reactjs",
  "Redux": "simple-icons:redux",
  "React-router": "logos-react-router",
  "NodeJS": "logos:nodejs",
  "CSS3": "vscode-icons:file-type-css",
  "SCSS": "vscode-icons:file-type-scss",
  "HTML5": "vscode-icons:file-type-html",
  "JavaScript": "logos:javascript"
};

export default function Modal({project}) {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  // const modalSetProject = useSelector((state) => state.modalSetProject);
  // const { project } = modalSetProject;
  const { description__1, description__2, description__3, github, name, skills, 
    // video, 
    url } = project



  useEffect(() => {
    // add when mounted
    window.setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 100);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
  // outside click 
    dispatch({ type: MODAL_SETPROJECT_RESET })
    dispatch(modalToggleOpen());
};


  console.log(url)
  // console.log(modifiedName)

  const node = useRef();


    // const [modalOpen, setModalOpen] = useState(true)
  // const handleModal = (e) => {
  //   e.preventDefault();
  //   dispatch({ type: MODAL_SETPROJECT_RESET })
  //   dispatch(modalToggleOpen());
  // };

  // if (name) {
  //   const modifiedName = name.split(" ").join("").toLowerCase();
  //   // const vidoSrc = modifiedName

  //   // console.log(modifiedName);

    return (
      <div
        className="modal"
        style={
          !isOpen
            ? { opacity: "0", backgroundColor: "transparent", display: "none" }
            : { opacity: "1", backgroundColor: "rgba(0, 0, 0, 0.685)" }
        }
      >
        <button className="btn__modal--close" 
        // onClick={(e) => handleModal(e)}
        >
          X
        </button>

        <div className="modal__container" ref={node}>
          <div className="modal__container--top">
            <div className="modal__title text-size-2">{name}</div>
            {/* <div className="modal__video"> */}

            {/* <video
              src={kelloggtutoring__video}
              // src={`${modifiedName}__video`}
              // controls="controls"
              width="600"
              height="300"
              className="modal__video"
              controls={false}
              autoPlay={true}
              loop={true}
              muted={true}
            /> */}
            {/* </div> */}

            {skills && (
              <div className="modal__skills">
                {skills.map((skill) => (
                  <div className="modal__skills--container ">
                    <span
                      className="iconify modal__skills--icon"
                      data-icon={icons[skill]}
                      data-inline="false"
                      style={{fontSize: "1.6rem"}}
                    ></span>
                    <div className="modal__skills--text text-size-5">{skill}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="modal__paragraph--container">
              <focus className="modal__subheader--1 text-size-3">Focus of project:</focus><div className="modal__paragraph--1 text-size-5">{description__1}</div>
              <focus className="modal__subheader--2 text-size-3">What I learned:</focus><div className="modal__paragraph--2 text-size-5">{description__2}</div>
              <focus className="modal__subheader--3 text-size-3">About the code:</focus><div className="modal__paragraph--3 text-size-5">{description__3}</div>
            </div>
          </div>

          <div className="modal__container--bottom">
            <div className="modal__github">
              <a href={github}>
                <button className="modal__github--btn">
                  Github Repository
                </button>
              </a>
            </div>
            <div className="modal__url">
              <a href={url}>
                <button className="modal__url--btn">Launch Application</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  // }
}