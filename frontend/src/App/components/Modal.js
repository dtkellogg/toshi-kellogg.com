// react
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// prop-types
import PropTypes from "prop-types";

// actions
import { modalToggleOpen } from "../actions/modalActions";

// constants
import { MODAL_SETPROJECT_RESET } from '../constants/modalConstants'

// data
import { icons } from "../data/icons"


export default function Modal({ project }) {
  const dispatch = useDispatch();
  const node = useRef();

  const { description__1, description__2, description__3, github, name, skills,
    // video, 
  url } = project

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const [shouldRender, setRender] = useState(isOpen);
  const [animation, setAnimation] = useState(isOpen);


  const handleClick = e => {
    console.log(`node.contains: ${node.contains}`)

    if(node.contains === undefined) {

      if (node.current.contains(e.target)) {
        // inside modal
        return;
      }
    }

    // outside modal 
    if (isOpen) {
      setAnimation(false)
      window.setTimeout(() => {
        dispatch(modalToggleOpen());
        dispatch({ type: MODAL_SETPROJECT_RESET })
      }, 900);
    }
    
  };

  useEffect(() => {
    window.setTimeout(() => {
      document.addEventListener("click", handleClick);
    }, 100);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  const onAnimationEnd = () => {
    if (!isOpen) {
      window.setTimeout(() => {
        setRender(false);
      }, 100);
    }
  };


  return (
    shouldRender && (
      <section
        className="modal"
        style={{ animation: `${animation ? "fadeIn" : "fadeOut"} 1s`
          // !isOpen
            // ? { opacity: "0", backgroundColor: "transparent", display: "none" }
            // : { opacity: "1", backgroundColor: "rgba(0, 0, 0, 0.685)" }
        }}
        onAnimationEnd={onAnimationEnd}
      >
        <button className="btn__modal--close" 
        // onClick={(e) => handleModal(e)}
        >
          X
        </button>

        <div className="modal__container" ref={node}>
          <div className="modal__container--top">
            <div className="modal__header text-size-2">{name}</div>
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
              <ul className="modal__container--skills">
                {skills.map((skill) => (
                  <li className="modal__skills--item" key={skill}>
                    <span
                      className="iconify modal__skills--icon"
                      data-icon={icons[skill]}
                      data-inline="false"
                      style={{fontSize: "1.6rem"}}
                    />
                    <div className="modal__skills--text text-size-3">{skill}</div>
                  </li>
                ))}
              </ul>
            )}

            <div className="modal__paragraph--container">
              <div className="modal__subheader--1 text-size-3">Abstract:</div><div className="modal__paragraph--1 text-size-5">{description__1}</div>
              <div className="modal__subheader--2 text-size-3">What I learned:</div><div className="modal__paragraph--2 text-size-5">{description__2}</div>
              <div className="modal__subheader--3 text-size-3">About the code:</div><div className="modal__paragraph--3 text-size-5">{description__3}</div>
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
      </section>
    )
  );
}

Modal.propTypes = {
  project: PropTypes.object
}