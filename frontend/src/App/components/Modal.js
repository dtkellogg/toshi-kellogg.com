// react
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import ModalSkill from "./ModalSkill"

// actions
import { modalToggleOpen } from "../actions/modalActions";

// constants
import { MODAL_SETPROJECT_RESET } from '../constants/modalConstants'

// data
import { icons } from "../data/icons"


export default function Modal() {
  const dispatch = useDispatch();
  const node = useRef();

  const { project } = useSelector((state) => state.modalSetProject)
  const { abstract, github, name, skills, html, css, scss, js, reactJS, nodeJS, redux, security,
    // video, 
  url } = project

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const [animation, setAnimation] = useState(isOpen);

  const handleClick = e => {

    // if(node.contains === undefined) {

    //   if (node.current.contains(e.target)) {
    //     // inside modal
    //     return;
    //   }
    // }

    // outside modal 
    // if (isOpen) {
      setAnimation(false)
      window.setTimeout(() => {
        dispatch(modalToggleOpen());
        dispatch({ type: MODAL_SETPROJECT_RESET })
      }, 900);
    // }
  };

  // useEffect(() => {     
  //   window.setTimeout(() => {
  //     document.addEventListener("click", handleClick);
  //   }, 100);

  //   return () => {
  //     document.removeEventListener("click", handleClick);
  //   };
  // }, []);
  

  return (
    <section
      className="modal"
      style={{ animation: `${animation ? "fadeIn" : "fadeOut"} 1s` }}
      // onAnimationEnd={onAnimationEnd}
    >
      <div className="modal__container" ref={node}>
        <div className="modal__container--top">
          <button className="modal__btn--close" onClick={(e) => handleClick(e)}>
            X
          </button>
          <div className="modal__header">{name}</div>
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
                  <div className="modal__skills--text">{skill}</div>
                </li>
              ))}
            </ul>
          )}

          <div className="modal__paragraph--container">
            <div className="modal__subheader--1">Abstract:</div>
            <div className="modal__paragraph--1">{abstract}</div>
            <div className="modal__subheader--2">About the Code:</div>
            {html && html.length > 0 && <ModalSkill name="HTML" skill={html}/>}
            {css && css.length > 0 && <ModalSkill name="CSS" skill={css}/>}
            {scss && scss.length > 0 && <ModalSkill name="SCSS" skill={scss}/>}
            {js && js.length > 0 && <ModalSkill name="JavaScript" skill={js}/>}
            {reactJS && reactJS.length > 0 && <ModalSkill name="React.js" skill={reactJS}/>}
            {nodeJS && nodeJS.length > 0 && <ModalSkill name="Node.js" skill={nodeJS}/>}
            {redux && redux.length > 0 && <ModalSkill name="Redux" skill={redux}/>}
            {security && security.length > 0 && <ModalSkill name="Security" skill={security}/>}
          </div>
        </div>

        <div className="modal__container--bottom">
            <a href={github}>
              <button className="modal__btn--github">
                Github Repository
              </button>
            </a>
            <a href={url}>
              <button className="modal__btn--url">Launch Application</button>
            </a>
        </div>
      </div>
    </section>
  )
}