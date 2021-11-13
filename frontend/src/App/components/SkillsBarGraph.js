import React from 'react'


export default function SkillsBarGraph() {

  return (
    <figure>
      <header className="bar-graph__header">
        <h1>
          Skills
        </h1>
      </header>
      <section className="bar-graph__container--body">
        <div className="bar-graph__container--scale">
          <span className="">Proficient</span>
          <span className="">Expert</span>
        </div>

        <span className="bar-graph__skill--1">HTML</span>
        <div className="bar-graph__bar--1"></div>
        <div className="bar-graph__bar-background--1"></div>

        <span className="bar-graph__skill--2">CSS</span>
        <div className="bar-graph__bar--2"></div>
        <div className="bar-graph__bar-background--2"></div>

        <span className="bar-graph__skill--3">SASS</span>
        <div className="bar-graph__bar--3"></div>
        <div className="bar-graph__bar-background--3"></div>

        <span className="bar-graph__skill--4">JS</span>
        <div className="bar-graph__bar--4"></div>
        <div className="bar-graph__bar-background--4"></div>

        <span className="bar-graph__skill--5">React.js</span>
        <div className="bar-graph__bar--5"></div>
        <div className="bar-graph__bar-background--5"></div>

        <span className="bar-graph__skill--6">Node.js</span>
        <div className="bar-graph__bar--6"></div>
        <div className="bar-graph__bar-background--6"></div>

        <span className="bar-graph__skill--7">Redux</span>
        <div className="bar-graph__bar--7"></div>
        <div className="bar-graph__bar-background--7"></div>
      </section>
    </figure>
  )
}