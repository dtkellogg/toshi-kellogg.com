import React from "react";
import { useDispatch } from "react-redux";
import { handleTextChange } from "../actions/formActions";


function Input({ containerClass, inputClass, type, value, placeholder, textarea, name}) {
  const dispatch = useDispatch();

  console.log(localStorage.getItem(name))
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

export default Input

Input.defaultProps = {
  textarea: false,
}