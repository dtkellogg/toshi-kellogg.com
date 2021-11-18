import React from "react";
import { useDispatch } from "react-redux";
import { handleTextChange } from "../actions/messageActions";


export default function FormInput({ containerClass, inputClass, type, value, placeholder, textarea, name}) {
  const dispatch = useDispatch();

  return (
    <div className={containerClass}>
      {!textarea 
        ? <input
          type={type}
          name={name}
          className={inputClass}
          value={localStorage.getItem(name) ? localStorage.getItem(name) : value}
          onChange={(e) => dispatch(handleTextChange(e))}
        />
        : <textarea
          type={type}
          name={name}
          className={inputClass}
          value={localStorage.getItem(name) ? localStorage.getItem(name) : value}
          onChange={(e) => dispatch(handleTextChange(e))}
        />
      }
      <label className={(value && 'filled') || (localStorage.getItem(name) && 'filled')} htmlFor={name} >{placeholder}</label>
      <span className="contact__focus-border" />
    </div>
  )
}

FormInput.defaultProps = {
  textarea: false,
}