import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {FaReact, FaRedux, FaReactRouter, FaNodeJs, FaCss3Alt, FaSass} from "react-icons/fa"

// actions
import { modalToggleOpen } from "../actions/modalActions";

// videos
import kelloggtutoring__video from '../videos/kelloggtutoring.mov'
import davisnightmarket__video from '../videos/nightmarket.mov'

const icons = {
  "React": "vscode-icons:file-type-reactjs",
  "Redux": "simple-icons:redux",
  "React-router": "logos-react-router",
  "NodeJS": "logos:nodejs",
  "CSS3": "vscode-icons:file-type-css",
  "SASS": "logos:sass",
  "HTML5": "vscode-icons:file-type-html",
};

export default function Modal() {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const modalSetProject = useSelector((state) => state.modalSetProject);
  const { project } = modalSetProject;
  const { description, github, name, picture, skills, video, url } = project





  console.log(url)
  // console.log(modifiedName)


    // const [modalOpen, setModalOpen] = useState(true)
  const handleModal = (e) => {
    e.preventDefault();
    dispatch(modalToggleOpen());
  };

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
          <button className="btn__modal--close" onClick={(e) => handleModal(e)}>
            X
          </button>

        <div className="modal__container">
          <div className="modal__container--top">
            <div className="modal__title text-size-2">{name}</div>
            {/* <div className="modal__video"> */}
            <video
              src={kelloggtutoring__video}
              // src={`${modifiedName}__video`}
              width="600"
              height="300"
              controls="controls"
              autoplay="true"
              loop="true"
              className="modal__video"
            />
            {/* </div> */}

            {skills && (
              <div className="modal__skills">
                {skills.map((skill) => (
                  <div className="text-size-5">
                    <span
                      class="iconify"
                      data-icon={icons[skill]}
                      data-inline="false"
                    ></span>
                    {skill}
                  </div>
                ))}
              </div>
            )}
            <div className="modal__paragraph text-size-5">{description}</div>
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
            {/* <button
              className="modal__back--btn btn--2"
              onClick={(e) => handleModal(e)}
            >
              Back
            </button> */}
          </div>
        </div>
      </div>
    );
  // }
}