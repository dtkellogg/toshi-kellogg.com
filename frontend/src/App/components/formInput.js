import React from 'react'

function Input({ containerClass, inputClass, type, value, placeholder, onChange, textarea, name}) {
  return (
    <div className={containerClass}>
      {!textarea 
        ? <input
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        : <textarea
          type={type}
          name={name}
          className={inputClass}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }
      <span className="contact__focus-border" />
    </div>
  )
}

export default Input

Input.defaultProps = {
  textarea: false,
}