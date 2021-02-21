import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { sendMessage } from "../actions/messageActions";

// components
import Map from "../components/Map"

function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState("");

  const dispatch = useDispatch();

  const validate = () => {
    // eslint-disable-next-line no-useless-escape
    const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

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
    const isValid = validate();

    if (isValid) {
      setSubmitted(true);

      window.setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      await dispatch(sendMessage(name, email, subject, message))
        .then(() => {
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        });
    }
  };


  return (
    <div className="contact">
      <div className="contact__container--left">
        <h1 className="contact__header text-size-0">Contact me</h1>
        <p className="contact__paragraph text-size-4">
          I am interested in entry level positions - especially those that will
          allow me to grow the most as a developer. If you have any questions or
          interest in learning more about me, please don't hesitate to contact
          me using the form below.
        </p>

        <form className="contact__form">
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
          className="btn__contact-form"
          onClick={handleSubmit}
          disabled={submitted || failed.length > 0}
        >
          Submit
        </button>
      </div>

      <div className="contact__container--right">
        <div className="">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
