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

  const { abstract, github, name, skills, html, css, scss, js, reactJS, nodeJS, redux, security,
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


  return (
    shouldRender && (
      <section
        className="modal"
        style={{ animation: `${animation ? "fadeIn" : "fadeOut"} 1s` }}
        onAnimationEnd={onAnimationEnd}
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
              {/* {features && (
                <ul className="modal__paragraph--2">{features.map((feature) => {
                  return <li className="modal__feature">{feature}</li>
                })}</ul>
              )} */}
              {html && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">HTML</span>
                  {html.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {css && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">CSS</span>
                  {css.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {scss && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">SCSS</span>
                  {scss.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {js && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">JavaScript</span>
                  {js.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {reactJS && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">React.js</span>
                  {reactJS.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {nodeJS && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">Node.js</span>
                  {nodeJS.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {redux && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">Redux</span>
                  {redux.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
              {security && (
                <ul className="modal__paragraph--2">
                  <span className="modal__feature--label">Security</span>
                  {security.map((value) => {
                    return <li className="modal__feature">{value}</li>
                  })}
                </ul>
              )}
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
  );
}

Modal.propTypes = {
  project: PropTypes.object
}