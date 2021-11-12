import React from 'react'


export default function SkillsBarGraph() {

  return (
    <>
      <header className="bar-graph__header">
        <h1>
          Skills
        </h1>
      </header>
      <section className="bar-graph">
        <div className="bar-graph__labels">
          <span className="">Proficient</span>
          <span className="">Expert</span>
        </div>

        <span className="skill skill__1">HTML</span>
        <div className="bar bar__1"></div>
        <div className="bar-background bar-background__1"></div>

        <span className="skill skill__2">CSS</span>
        <div className="bar bar__2"></div>
        <div className="bar-background bar-background__2"></div>

        <span className="skill skill__3">SASS</span>
        <div className="bar bar__3"></div>
        <div className="bar-background bar-background__3"></div>

        <span className="skill skill__4">JS</span>
        <div className="bar bar__4"></div>
        <div className="bar-background bar-background__4"></div>

        <span className="skill skill__5">React.js</span>
        <div className="bar bar__5"></div>
        <div className="bar-background bar-background__5"></div>

        <span className="skill skill__6">Node.js</span>
        <div className="bar bar__6"></div>
        <div className="bar-background bar-background__6"></div>

        <span className="skill skill__7">Redux</span>
        <div className="bar bar__7"></div>
        <div className="bar-background bar-background__7"></div>
      </section>
    </>
  )
}