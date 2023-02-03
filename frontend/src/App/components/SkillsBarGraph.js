import React from 'react'
// import Skill from './Skill'

// const skills = [
//   {
//     full_name: "HyperText Markup Language",
//     abbreviation: "HTML"
//   },
//   {
//     full_name: "Cascading Style Sheets",
//     abbreviation: "CSS"
//   },
//   {
//     full_name: "Syntactically Awesome Style Sheets",
//     abbreviation: "SASS"
//   },
//   {
//     full_name: "JavaScript",
//     abbreviation: "JavaScript"
//   },
//   {
//     full_name: "React.js",
//     abbreviation: "React.js"
//   },
//   {
//     full_name: "Node.js",
//     abbreviation: "Node.js"
//   },
//   {
//     full_name: "Redux",
//     abbreviation: "Redux"
//   },
//   // {
//   //   full_name: "HyperText Markup Language",
//   //   label: "HTML"
//   // },
// ]

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

        {/* {skills.map((skill, i) => (
          <Skill key={i} name={skill.full_name} abbreviation={skill.abbreviation} />
        ))} */}

        <abbr title="HyperText Markup Language" className="bar-graph__skill--0">HTML</abbr>
        <div className="bar-graph__bar--0"></div>
        <div className="bar-graph__bar-background--0"></div>

        <abbr title="Cascading Style Sheets" className="bar-graph__skill--1">CSS</abbr>
        <div className="bar-graph__bar--1"></div>
        <div className="bar-graph__bar-background--1"></div>

        <abbr title="Syntactically Awesome Style Sheets" className="bar-graph__skill--2">SASS</abbr>
        <div className="bar-graph__bar--2"></div>
        <div className="bar-graph__bar-background--2"></div>

        <abbr title="TailwindCSS" className="bar-graph__skill--3">TailwindCSS</abbr>
        <div className="bar-graph__bar--3"></div>
        <div className="bar-graph__bar-background--3"></div>

        <abbr title="JavaScript" className="bar-graph__skill--4">Material Design</abbr>
        <div className="bar-graph__bar--4"></div>
        <div className="bar-graph__bar-background--4"></div>

        <span className="bar-graph__skill--5">JavaScript</span>
        <div className="bar-graph__bar--5"></div>
        <div className="bar-graph__bar-background--5"></div>

        <span className="bar-graph__skill--6">TypeScript</span>
        <div className="bar-graph__bar--6"></div>
        <div className="bar-graph__bar-background--6"></div>

        <span className="bar-graph__skill--7">React.js</span>
        <div className="bar-graph__bar--7"></div>
        <div className="bar-graph__bar-background--7"></div>

        <span className="bar-graph__skill--8">React Native</span>
        <div className="bar-graph__bar--8"></div>
        <div className="bar-graph__bar-background--8"></div>

        <span className="bar-graph__skill--9">Vue.js</span>
        <div className="bar-graph__bar--9"></div>
        <div className="bar-graph__bar-background--9"></div>

        <span className="bar-graph__skill--10">Next.js</span>
        <div className="bar-graph__bar--10"></div>
        <div className="bar-graph__bar-background--10"></div>

        <span className="bar-graph__skill--11">Nuxt.js</span>
        <div className="bar-graph__bar--11"></div>
        <div className="bar-graph__bar-background--11"></div>

        <span className="bar-graph__skill--12">Node.js</span>
        <div className="bar-graph__bar--12"></div>
        <div className="bar-graph__bar-background--12"></div>

        <span className="bar-graph__skill--13">GraphQL</span>
        <div className="bar-graph__bar--13"></div>
        <div className="bar-graph__bar-background--13"></div>

        <span className="bar-graph__skill--14">Redux</span>
        <div className="bar-graph__bar--14"></div>
        <div className="bar-graph__bar-background--14"></div>
      </section>
    </figure>
  )
}