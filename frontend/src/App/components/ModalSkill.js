import React from 'react'

export default function ModalSkill({name, skill}) {
  return (
    <ul className="modal__paragraph--2">
      <span className="modal__feature--label">{name}</span>
      {skill.map((bulletPt) => {
        return <li className="modal__feature">{bulletPt}</li>
      })}
    </ul>
  )
}