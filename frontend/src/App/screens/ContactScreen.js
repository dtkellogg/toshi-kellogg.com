import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Loader from "react-loader-spinner";

// actions
import { handleTextChange, handleSubmit } from "../actions/formActions";

// components
import Map from "../components/Map"
import { TOGGLE_READY_TO_SUBMIT } from "../constants/formConstants";


function ContactScreen() {
  const formData = useSelector((state) => state.formData)
  const {name, email, subject, message, readyToSubmit, submitted} = formData
  
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(() => {
    if((name && email && subject && message && readyToSubmit === false)
      ||
    ((!name || !email || !subject || !message) && readyToSubmit === true)) {
      dispatch({type: TOGGLE_READY_TO_SUBMIT, payload: !readyToSubmit})
    }
  }, [name, email, subject, message])

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])


  return (
    <div className="contact__container">
      <div className="contact__container--left">
        <h1 className="contact__header text-size-1 fadeInAnimated--0">
          Contact
        </h1>
        <p className="contact__paragraph--1 text-size-3 fadeInAnimated--1">
          I am interested in <span className="skills__blue-text">team-based positions</span> - especially those 
          that will allow me to work alongside the most talented developers.
        </p>
        <br />
        <p className="contact__paragraph--2 text-size-3 fadeInAnimated--2">
          If you have any questions for me, please fill out the form below.
        </p>

        <form className="contact__form fadeInAnimated--3">
          <div className="contact__form--element contact__element--name">
            <input
              type="name"
              name="name"
              className="contact__form--input text-size-4"
              placeholder="Name"
              value={name}
              onChange={(e) => dispatch(handleTextChange(e))}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--email">
            <input
              type="email"
              name="email"
              className="contact__form--input text-size-4"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(handleTextChange(e))}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--subject">
            <input
              type="subject"
              name="subject"
              className="contact__form--input text-size-4"
              placeholder="Subject"
              value={subject}
              onChange={(e) => dispatch(handleTextChange(e))}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--message">
            <textarea
              type="text"
              name="message"
              className="contact__form--input text-size-4"
              placeholder="Message"
              value={message}
              onChange={(e) => dispatch(handleTextChange(e))}
            />
            <span className="contact__focus-border"></span>
          </div>
        </form>

        <button
          className="btn__contact-form fadeInAnimated--3 text-size-4"
          onClick={() => dispatch(handleSubmit(name, email, subject, message, addToast))}
          style={ 
            !readyToSubmit ? {
              "color": "var(--grey-4)",
              "border": "1px solid var(--grey-7)",
              "backgroundColor": "var(--grey-11)"
             } : {
              "color": "var(--black)",
              "border": "1px solid var(--blue-3)",
              "backgroundColor": "var(--blue-1)"
            }
          }
        >
          {!submitted ? (
            "Submit"
            ) : (
            <Loader
              type="TailSpin"
              color="#000"
              height={25}
              width={30}
              className={"contact__loader"}
            />
          )}
        </button>
      </div>

      <div className="contact__container--right fadeInAnimated--4">
        <div className="contact__map">
          <Map />
        </div>
        <div className="map__overlay" />
      </div>

    </div>
  );
}

export default ContactScreen;