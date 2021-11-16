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

        <abbr title="HyperText Markup Language" className="bar-graph__skill--1">HTML</abbr>
        <div className="bar-graph__bar--1"></div>
        <div className="bar-graph__bar-background--1"></div>

        <abbr title="Cascading Style Sheets" className="bar-graph__skill--2">CSS</abbr>
        <div className="bar-graph__bar--2"></div>
        <div className="bar-graph__bar-background--2"></div>

        <abbr title="Syntactically Awesome Style Sheets" className="bar-graph__skill--3">SASS</abbr>
        <div className="bar-graph__bar--3"></div>
        <div className="bar-graph__bar-background--3"></div>

        <abbr title="JavaScript" className="bar-graph__skill--4">JS</abbr>
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