import React from 'react'


export default function SkillsBarGraph() {

  return (
    <>
      <header className="bar-graph__header fadeInAnimated--4">
        <h1 className="font-size-1">
          Skills
        </h1>
      </header>
      <section className="bar-graph fadeInAnimated--5">
        <div className="bar-graph__labels">
          <span className="font-size-4">Proficient</span>
          <span className="font-size-4">Expert</span>
        </div>

        <span className="skill skill__1 font-size-4">HTML</span>
        <div className="bar bar__1"></div>
        <div className="bar-background bar-background__1"></div>

        <span className="skill skill__2 font-size-4">CSS</span>
        <div className="bar bar__2"></div>
        <div className="bar-background bar-background__2"></div>

        <span className="skill skill__3 font-size-4">SASS</span>
        <div className="bar bar__3"></div>
        <div className="bar-background bar-background__3"></div>

        <span className="skill skill__4 font-size-4">JS</span>
        <div className="bar bar__4"></div>
        <div className="bar-background bar-background__4"></div>

        <span className="skill skill__5 font-size-4">React</span>
        <div className="bar bar__5"></div>
        <div className="bar-background bar-background__5"></div>

        <span className="skill skill__6 font-size-4">Node</span>
        <div className="bar bar__6"></div>
        <div className="bar-background bar-background__6"></div>

        <span className="skill skill__7 font-size-4">Redux</span>
        <div className="bar bar__7"></div>
        <div className="bar-background bar-background__7"></div>
      </section>
    </>
  )
}