import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";

// actions
import { sendMessage } from "../actions/messageActions";

// components
import Map from "../components/Map"

import Loader from "react-loader-spinner";

import useValidate from "../hooks/useValidate"

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [readyToSubmit, setReadyToSubmit] = useState(false)

  const dispatch = useDispatch();

  const { addToast } = useToasts();

  // I want to move the following validation code to a custom hook, but I can't figure out how to call it from handleSubmit (must be called on top layer)
  const validate = () => {
    const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; // eslint-disable-line no-useless-escape

    if (!emailRegexp.test(email) && message.length === 0 && subject.length === 0 && name.length === 0) {
      addToast("Please fill out all fields.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    else if (!emailRegexp.test(email) && message.length === 0 && subject.length === 0) {
      addToast("Please submit a subject, message and valid email address.", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (!emailRegexp.test(email)) {
      addToast("Please submit a valid email address.", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (message.length === 0 && subject.length === 0) {
      addToast("Please add a message and subject.", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (message.length === 0) {
      addToast("Please add a message.", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (subject.length === 0) {
      addToast("Please add a subject.", {
        appearance: "error",
        autoDismiss: true,
      });
    } else {
      return true;
    }
  };
  ///////////////

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.setTimeout(() => {
      setReadyToSubmit(false);

    }, 4000);

    const isValid = validate();

    if (isValid) {
      setSubmitted(true);

      window.setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      await dispatch(sendMessage(name, email, subject, message))
        .then(() => {
          console.log("MESSAGE SENT")
          window.setTimeout(() => {
            addToast("Thank you! Your message has been successfully submitted.", {
                appearance: "success",
                autoDismiss: true,
              }
            );
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
          }, 4000);
        });
    }
  };

  useEffect(() => {
    if( name && email && subject && message ) {
      setReadyToSubmit(true)
    } 
    else {
      setReadyToSubmit(false)
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
              className="contact__form--input text-size-4"
              placeholder="Name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--email">
            <input
              type="email"
              className="contact__form--input text-size-4"
              placeholder="Email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--subject">
            <input
              type="subject"
              className="contact__form--input text-size-4"
              placeholder="Subject"
              value={subject || ""}
              onChange={(e) => setSubject(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--message">
            <textarea
              type="text"
              className="contact__form--input text-size-4"
              placeholder="Message"
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>
        </form>

        <button
          className="btn__contact-form fadeInAnimated--3 text-size-4"
          onClick={handleSubmit}
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
