import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Loader from "react-loader-spinner";

// actions
import { handleTextChange, handleSubmit } from "../actions/formActions";

// components
import Map from "../components/Map"
import { TOGGLE_READY_TO_SUBMIT } from "../constants/formConstants";
import Input from "../components/formInput"


function ContactScreen() {
  const formData = useSelector((state) => state.formData)
  const {name, email, subject, message, readyToSubmit, submitted} = formData
  
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(() => {
    if((name && email && subject && message && !readyToSubmit)
      ||
    ((!name || !email || !subject || !message) && readyToSubmit === true)) {
      dispatch({type: TOGGLE_READY_TO_SUBMIT, payload: !readyToSubmit})
    }
  }, [name, email, subject, message])

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])


  return (
    <section className="contact__container">
      <section className="contact__container--left">
        <header className="contact__header text-size-1 fadeInAnimated--0">
          <h1 className="text-size-1">
            Contact
          </h1>
        </header>
        <p className="contact__paragraph--1 text-size-3 fadeInAnimated--1">
          I am interested in <span className="skills__blue-text">team-based positions</span> - especially those 
          that will allow me to work alongside the most talented developers.
        </p>
        <br />
        <p className="contact__paragraph--2 text-size-3 fadeInAnimated--2">
          If you have any questions for me, please fill out the form below.
        </p>

        <form className="contact__form fadeInAnimated--3">
          <Input containerClass="contact__form--element contact__element--name" inputClass="contact__form--input text-size-4" name="name"
            type="name" value={name} placeholder="Name" onChange={(e) => dispatch(handleTextChange(e))}
          />
            <Input containerClass="contact__form--element contact__element--email" inputClass="contact__form--input text-size-4" name="email"
            type="email" value={email} placeholder="Email" onChange={(e) => dispatch(handleTextChange(e))}
          />
            <Input containerClass="contact__form--element contact__element--subject" inputClass="contact__form--input text-size-4" name="subject"
            type="subject" value={subject} placeholder="Subject" onChange={(e) => dispatch(handleTextChange(e))}
          />
            <Input containerClass="contact__form--element contact__element--message" inputClass="contact__form--input text-size-4" name="message"
            type="text" value={message} placeholder="Message" textarea={true} onChange={(e) => dispatch(handleTextChange(e))}
          />
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
      </section>

      <section className="contact__container--right fadeInAnimated--4">
        <figure className="contact__map">
          <Map />
        </figure>
        <div className="map__overlay" />
      </section>

    </section>
  );
}

export default ContactScreen;