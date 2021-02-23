// react
import React from 'react'

// images
import aboutImage from '../img/aboutImage.jpg'

function AboutScreen() {
    return (
      <div className="about">
        <div className="about__container--left">
          <h1 className="about__header text-size-0 fadeInAnimated--1">
            About Screen
          </h1>
          <div className="about__text">
            <span className="about__text--1 text-size-3 fadeInAnimated--2">
              Professionally new to the world of web development.
            </span>
            <br />
            <br />
            <span className="about__text--2 text-size-3 fadeInAnimated--3">
              Well organized, problem solver, math lover, independent employee
              with a high degree of attention to detail. Fan of running, soccer,
              traveling to third world countries.
            </span>
            <br />
            <br />
            <span className="about__text--3 text-size-3 fadeInAnimated--4">
              Interested in both the front and back ends of web development.
              Looking to work on ambitious projects with positive people.
            </span>
          </div>
        </div>

        <div className="about__container--right fadeInAnimated--4">
          <img
            src={aboutImage}
            alt="Kellogg Tutoring img"
            className="about__image fadeInAnimated--1"
          />
        </div>
      </div>
    );
}

export default AboutScreen