// react
import React, { useEffect } from 'react'

// components
import SkillsBarGraph from '../components/SkillsBarGraph'


export default function AboutScreen() {

  useEffect(() => {
    document.title = "Toshi Kellogg | Web Developer";
  }, [])

  return (
    <section className="about__container">

      <section className="about__container--left">
        <header className="about__header">
          <h1>
            About
          </h1>
        </header>
        <section className="about__text">
          <p className="about__text--1">
            Hello, I'm Toshi. I'm a self taught full stack programmer with a passion for learning new technologies.
          </p>
          <p className="about__text--2">
            Three years ago, I decided to pursue a career in programming. I have been able to teach myself almost everything I know, and have worked professionally as a full stack developer for a little under a year. My success as a programmer comes from my background in STEM and as a teacher, as well as my patience and curiosity.
          </p>
          <p className="about__text--3">
            When I am not programming, I love to spend my time traveling.
          </p>
        </section>
      </section>

      <section className="about__container--right">
        <SkillsBarGraph />
      </section>
      
    </section>
  );
}