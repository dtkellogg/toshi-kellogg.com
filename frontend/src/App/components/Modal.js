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

  const { abstract, features, github, name, skills, html, css, scss, js, reactJS, nodeJS, redux, git,
    // video, 
  url } = project

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  const [shouldRender, setRender] = useState(isOpen);
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

  console.log("features")
  console.log(features)

  return (
    shouldRender && (
      <section
        className="modal"
        style={{ animation: `${animation ? "fadeIn" : "fadeOut"} 1s` }}
        onAnimationEnd={onAnimationEnd}
      >

        <div className="modal__container" ref={node}>
          
          <div className="modal__container--top">
            <button className="btn__modal--close" onClick={(e) => handleClick(e)}>
              X
            </button>
            <div className="modal__header font-size-2">{name}</div>
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
                    <div className="modal__skills--text font-size-3">{skill}</div>
                  </li>
                ))}
              </ul>
            )}

            <div className="modal__paragraph--container">
              <div className="modal__subheader--1 font-size-3">Abstract:</div>
              <div className="modal__paragraph--1 font-size-5">{abstract}</div>
              <div className="modal__subheader--3 font-size-3">About the code:</div>
              {/* {features && (
                <ul className="modal__paragraph--3 font-size-5">{features.map((feature) => {
                  return <li className="modal__feature">{feature}</li>
                })}</ul>
              )} */}
              {html && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">HTML</span>
                  {html.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {css && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">CSS</span>
                  {css.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {scss && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">SCSS</span>
                  {scss.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {js && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">JavaScript</span>
                  {js.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {reactJS && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">React</span>
                  {reactJS.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {nodeJS && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">Node</span>
                  {nodeJS.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {redux && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">Redux</span>
                  {redux.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {git && (
                <ul className="modal__paragraph--3 font-size-5">
                  <span className="modal__feature--label">Git</span>
                  {git.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
            </div>
          </div>

          <div className="modal__container--bottom">
              <a href={github}>
                <button className="modal__github--btn font-size-3">
                  Github Repository
                </button>
              </a>
              <a href={url}>
                <button className="modal__url--btn font-size-3">Launch Application</button>
              </a>
          </div>
        </div>
      </section>
    )
  );
}

Modal.propTypes = {
  project: PropTypes.object
}