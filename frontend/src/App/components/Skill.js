import React from 'react'

function Skill(key, name, abbreviation) {
  return (
    <section>
      <abbr title={name} className={`bar-graph__skill--${key}`}>{abbreviation}</abbr>
      <div className={`bar-graph__bar--${key}`}></div>
      <div className={`bar-graph__bar-background--${key}`}></div>
    </section>
  )
}

export default Skill