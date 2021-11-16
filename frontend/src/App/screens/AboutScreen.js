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
        <header className="about__header">
          <h1>
            About
          </h1>
        </header>
        <section className="about__text">
          <p className="about__text--1">
            Hello, I’m Toshi. I’m a self taught full stack programmer with a passion for data structures and algorithms.
          </p>
          <p className="about__text--2">
            Coming from a bicultural background, thinking in different languages comes intuitively. Having completed my bachelor’s at UC Davis in chemistry and running my own college level tutoring business, I have fine tuned my ability to <em>break down problems</em> - translating to <strong>effective and logical code.</strong> My success as a programmer also comes from an innate ability to listen attentively, and always maintain my patience and curiosity.
          </p>
          <p className="about__text--3">
            When I am not programming, I love to spend my time reading, running, rock climbing, scuba diving and traveling.
          </p>
        </section>
      </section>

      <section className="about__container--right">
        <SkillsBarGraph />
      </section>
      
    </section>
  );
}