import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import Loader from "react-loader-spinner";

// components
import { default as Input } from "./FormInput"

// actions
import { sendMessage } from "../actions/messageActions";


export default function Form() {
  const formData = useSelector((state) => state.formData)
  let {name, email, subject, message, readyToSubmit, submitted} = formData

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  return (
    <>
      <form className="contact__container--form">
        <Input containerClass="contact__form--element contact__element--name" name="name"
          type="name" value={localStorage.getItem("name") ? localStorage.getItem("name") : name}
        />
        <Input containerClass="contact__form--element contact__element--email" name="email"
          type="email" value={localStorage.getItem("email") ? localStorage.getItem("email") : email}
        />
        <Input containerClass="contact__form--element contact__element--subject" name="subject"
          type="subject" value={localStorage.getItem("subject") ? localStorage.getItem("subject") : subject}
        />
        <Input containerClass="contact__form--element contact__element--message" inputClass="contact__form--textarea" name="message"
          type="text" value={localStorage.getItem("message") ? localStorage.getItem("message") : message} textarea={true}
        />
        <button
          className="contact__btn--submit"
          onClick={(e) => dispatch(sendMessage(e, addToast))}
          type="submit"
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
      </form>
    </>
  )
}