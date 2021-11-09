// react
import React, { useEffect } from 'react'

// components
import SkillsBarGraph from '../components/SkillsBarGraph'


function AboutScreen() {

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="about__container">
      <section className="about__container--left">
        <header className="about__header fadeInAnimated--0">
          <h1 className="text-size-1">
            About
          </h1>
        </header>
        <section className="about__text">
          <span className="about__text--1 text-size-3 fadeInAnimated--1">
            Hello, I’m Toshi. I’m a self taught full stack programmer with a passion for data structures and algorithms.
          </span>
          <br />
          <br />
          <span className="about__text--2 text-size-3 fadeInAnimated--2">
            Coming from a bicultural background, thinking in different languages comes intuitively. Having completed my bachelor’s at UC Davis in Chemistry and run my own college level tutoring service, I have fine tuned my ability to break down a problem into simple steps and write code efficiently and logically. Besides my love for mastering the material, my success as a programmer has come from an innate ability to maintain patience, stay curious, and listen attentively.
          </span>
          <br />
          <br />
          <span className="about__text--4 text-size-3 fadeInAnimated--3">
            When I am not programming, I enjoy spending my time running, reading a novel, and traveling.
          </span>
        </section>
      </section>

      <section className="about__container--right">
        <header className="skills-graph__header fadeInAnimated--4">
          <h1 className="text-size-1">
            Skills
          </h1>
        </header>
        <SkillsBarGraph />
      </section>
    </section>
  );
}

export default AboutScreen