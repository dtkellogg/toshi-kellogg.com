import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Map from "../components/Map"
import Form from "../components/Form"

// constants
import { TOGGLE_READY_TO_SUBMIT } from "../constants/messageConstants";


export default function ContactScreen() {
  const formData = useSelector((state) => state.formData)
  let { name, email, subject, message, readyToSubmit } = formData
  
  const dispatch = useDispatch();

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
          I am interested in <em>team-based positions</em> - especially those 
          that will allow me to work alongside the most talented developers.
        </p>
        <p className="contact__paragraph--2">
          If you have any questions, please fill out and submit the form below.
        </p>
        <Form />
      </section>

      <section className="contact__container--right">
        <Map />
        <div className="map__overlay" />
      </section>

    </section>
  );
}