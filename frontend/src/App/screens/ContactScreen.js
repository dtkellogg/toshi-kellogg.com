import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { sendMessage } from "../actions/messageActions";

// components
import Map from "../components/Map"

import Loader from "react-loader-spinner";

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState("");
  const [content, setContent] = useState("");
  const [readyToSubmit, setReadyToSubmit] = useState(false)

  const dispatch = useDispatch();

  const validate = () => {
    const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; // eslint-disable-line no-useless-escape

    if (!emailRegexp.test(email) && message.length === 0) {
      setFailed("Please submit a message and a valid email address.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else if (!emailRegexp.test(email)) {
      setFailed("Please submit a valid email address.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else if (message.length === 0) {
      setFailed("Please add a message.");
      window.setTimeout(() => {
        setFailed("");
      }, 4000);
    } else {
      return true;
    }
  };

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
    console.log(`readyToSubmit: ${readyToSubmit}`)
  }, [readyToSubmit]);


  return (
    <div className="contact">
      <div className="contact__container--left">
        <h1 className="contact__header text-size-0 fadeInAnimated--0">
          Contact me
        </h1>
        <p className="contact__paragraph text-size-4 fadeInAnimated--1">
          I am interested in entry level positions - especially those that will
          allow me to grow the most as a developer. If you have any questions or
          interest in learning more about me, please don't hesitate to contact
          me using the form below.
        </p>

        <form className="contact__form fadeInAnimated--2">
          <div className="contact__form--element contact__element--name">
            {/* <label className="contact__form--label"></label> */}
            <input
              type="name"
              className="contact__form--input text-size-5"
              placeholder="Name"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--email">
            {/* <label className="contact__form--label"></label> */}
            <input
              type="email"
              className="contact__form--input text-size-5"
              placeholder="Email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--subject">
            {/* <label className="contact__form--label"></label> */}
            <input
              type="subject"
              className="contact__form--input text-size-5"
              placeholder="Subject"
              value={subject || ""}
              onChange={(e) => setSubject(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>

          <div className="contact__form--element contact__element--message">
            {/* <label className="contact__form--label"></label> */}
            <textarea
              type="text"
              className="contact__form--input text-size-5"
              placeholder="Message"
              value={message || ""}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="contact__focus-border"></span>
          </div>
        </form>

        <button
          className="btn__contact-form fadeInAnimated--2 text-size-5"
          onClick={handleSubmit}
          style={ 
            !readyToSubmit ? {
              "color": "var(--grey-4)",
              "border": "1px solid var(--grey-7)",
              "backgroundColor": "var(--grey-11)"
             } : {
              "color": "var(--grey-3)",
              "border": "1px solid var(--blue-3)",
              "backgroundColor": "var(--blue)"
            }
          }
          disabled={!readyToSubmit}
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
              // style={{"margin": "1.45px 0"}}
              // timeout={3000} //3 secs
            />
          )}
        </button>
      </div>

      <div className="contact__container--right fadeInAnimated--3">
        <div className="contact__map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
