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


export default function ContactScreen() {
  const formData = useSelector((state) => state.formData)
  let {name, email, subject, message, readyToSubmit, submitted} = formData
  
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  useEffect(() => {
    if((name && email && subject && message && !readyToSubmit) || ((!name || !email || !subject || !message) && readyToSubmit === true)) {
      dispatch({type: TOGGLE_READY_TO_SUBMIT, payload: !readyToSubmit})
    }
  }, [name, email, subject, message])

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])


  return (
    <section className="contact__container">
      <section className="contact__container--left">
        <header className="contact__header">
          <h1>
            Contact
          </h1>
        </header>
        <p className="contact__paragraph--1">
          I am interested in <span className="skills__blue-text">team-based positions</span> - especially those 
          that will allow me to work alongside the most talented developers.
        </p>
        <p className="contact__paragraph--2">
          If you have any questions, please fill out and submit the form below.
        </p>

        <form className="contact__form">
          <Input containerClass="contact__form--element contact__element--name" inputClass="contact__form--input" name="name"
            type="name" value={localStorage.getItem("name") ? localStorage.getItem("name") : name} placeholder="Name"
          />
            <Input containerClass="contact__form--element contact__element--email" inputClass="contact__form--input" name="email"
            type="email" value={localStorage.getItem("email") ? localStorage.getItem("email") : email} placeholder="Email"
          />
            <Input containerClass="contact__form--element contact__element--subject" inputClass="contact__form--input" name="subject"
            type="subject" value={localStorage.getItem("subject") ? localStorage.getItem("subject") : subject} placeholder="Subject"
          />
            <Input containerClass="contact__form--element contact__element--message" inputClass="contact__form--textarea" name="message"
            type="text" value={localStorage.getItem("message") ? localStorage.getItem("message") : message} placeholder="Message" textarea={true}
          />
        </form>

        <button
          className="btn__contact-form"
          onClick={() => dispatch(handleSubmit(name, email, subject, message, addToast))}
          style={ 
            !readyToSubmit ? {
              "color": "var(--grey-8)",
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

      <section className="contact__container--right">
        <Map />
        <div className="map__overlay" />
      </section>

    </section>
  );
}