import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleTextChange, handleSubmit } from "../actions/formActions";


function Input({ containerClass, inputClass, type, value, placeholder, textarea, name}) {
  const dispatch = useDispatch();

  return (
    <div className={containerClass}>
      {!textarea 
        ? <input
          type={type}
          name={name}
          className={inputClass}
          // placeholder={placeholder}
          value={value}
          onChange={(e) => dispatch(handleTextChange(e))}
        />
        : <textarea
          type={type}
          name={name}
          className={inputClass}
          // placeholder={placeholder}
          value={value}
          onChange={(e) => dispatch(handleTextChange(e))}
        />
      }
      <label className={value && 'filled'} htmlFor={name} >{placeholder}</label>
      <span className="contact__focus-border" />
    </div>
  )
}

export default Input

Input.defaultProps = {
  textarea: false,
}