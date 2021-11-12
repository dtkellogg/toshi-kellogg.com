// react
import React, { useEffect } from 'react'

// components
import SkillsBarGraph from '../components/SkillsBarGraph'


export default function AboutScreen() {

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="about__container">
      <section className="about__container--left">
        <header className="about__header fadeInAnimated--0">
          <h1>
            About
          </h1>
        </header>
        <section className="about__text">
          <span className="about__text--1 fadeInAnimated--1">
            Hello, I’m Toshi. I’m a self taught full stack programmer with a passion for data structures and algorithms.
          </span>
          <span className="about__text--2 fadeInAnimated--2">
            Coming from a bicultural background, thinking in different languages comes intuitively. Having completed my bachelor’s at UC Davis in chemistry and running my own college level tutoring business, I have fine tuned my ability to break down problems - translating to efficient and logical code. My success as a programmer comes from an innate ability to maintain patience and curiosity, while also always listening attentively.
          </span>
          <span className="about__text--3 fadeInAnimated--3">
            When I am not programming, I enjoy spending my time running, reading a novel, and traveling.
          </span>
        </section>
      </section>

      <section className="about__container--right">
        <SkillsBarGraph />
      </section>
    </section>
  );
}