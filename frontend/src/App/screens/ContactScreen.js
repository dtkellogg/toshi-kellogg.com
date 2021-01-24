import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { sendMessage } from "../actions/messageActions";

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
      <h1>Contact me</h1>
      <p>I am interested in entry level positions - especially those that 
        will allow me to grow the most as a developer. If you have any questions
        or interest in learning more about me, please don't hesitate to contact me
        using the form below.
      </p>

      <form className="contact__form">
        <div className="contact__form--element">
          <label className="contact__form--label"></label>
          <input 
            type="name" 
            className="contact__form--input" 
            placeholder="name" value={name || ""}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="contact__form--element">
          <label className="contact__form--label"></label>
          <input
            type="email"
            className="contact__form--input"
            placeholder="email" value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="contact__form--element">
          <label className="contact__form--label"></label>
          <input
            type="subject"
            className="contact__form--input"
            placeholder="subject" value={subject || ""}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="contact__form--element">
          <label className="contact__form--label"></label>
          <textarea
            type="text"
            className="contact__form--input"
            placeholder="message" value={message || ""}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          className="contact__form--button"
          onClick={handleSubmit}
          disabled={submitted || failed.length > 0}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactScreen;
