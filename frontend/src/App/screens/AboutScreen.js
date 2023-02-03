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
            Hello, I'm Toshi. I'm a self taught full stack developer with a passion for learning new technologies.
          </p>
          <p className="about__text--2">
            At the beginning of 2020, I decided to pursue a career in programming. I have been able to teach myself almost everything I know, and have worked professionally as a full stack developer for a little under a year. My success as a programmer comes from my background in STEM and as a teacher, as well as my patience and curiosity.
          </p>
          <p className="about__text--3">
            Although some may see my untraditional background as a weakness, I find it to be one of my greatest assets. Almost all CS majors lack the ability to produce astheically pleasing UIs, while I not only became the principal frontend developer at Call Simulator, but I also trained three college interns to be proficient in Vue.js. In addition to my versatility on the frontend, I have also build APIs using both Node.js and GraphQL.
          </p>
          <p className="about__text--4">
            When I am not programming, I love to explore the outdoors - whether that be in my native California, Patagonia, or Raja Ampat.
          </p>
        </section>
      </section>

      <section className="about__container--right">
        <SkillsBarGraph />
      </section>
      
    </section>
  );
}