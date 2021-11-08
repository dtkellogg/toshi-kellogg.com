// react
import React, { useEffect, useState } from 'react'

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// components
import SkillsFigure from '../components/SkillsFigure'
import SkillsBarGraph from '../components/SkillsBarGraph'

// images
// import aboutImage from '../img/aboutImage.jpg'
// import baliemValleyImage from '../img/baliemValleyImage.jpg'
import toshiHeadshot from '../img/toshiHeadshot.jpg'

function AboutScreen() {
  const [image, setImage] = useState({
    src: toshiHeadshot,
    alt: "Me with the local headhunters (Baliem Valley, West Papua)",
    num: 1,
  });

  // const handleBtnClick = () => {
  //   if(image.src === aboutImage) {
  //     setImage({
  //       src: toshiHeadshot,
  //       alt: "Me with the local headhunters (Baliem Valley, West Papua)",
  //       num: 1
  //     });
  //   } else {
  //     setImage({
  //       src: aboutImage,
  //       alt: "My mom, dog and I (circa 2010) ",
  //       num: 2
  //     });
  //   }
  // }

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
            Coming from a bicultural background, thinking in different languages comes intuitively. Having completed my bachelor’s at UC Davis in Chemistry and run my own college level tutoring service, I have fine tuned my ability to break down a problem into simple steps and write code efficiently and logically.
          {/* </span>
          <br />
          <br />
          <span className="about__text--3 text-size-3 fadeInAnimated--3"> */}
            Besides my love for mastering the material, my success as a programmer has come from an innate ability to maintain patience, stay curious, and listen attentively.
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
        {/* <figure className="about__container--img">
          <img
            src={image.src}
            alt="My mom, dog and I (circa 2010)"
            className={image.src === toshiHeadshot ? "about__image--toshi-headshot" : "about__image--about"}
          /> */}
          {/* <span className="about__image--background" /> */}
          {/* <div className="about__arrows--container">
            <button
              className="btn__about-screen--left"
              disabled={image.num === 1}
            >
              <FaCaretLeft
                size={40}
                fill="var(--blue-4)"
                onClick={handleBtnClick}
              />
            </button>
            <span className="about__arrows--text text-size-4">
              {image.num} of 2
            </span>
            <button
              className="btn__about-screen--right"
              disabled={image.num === 2}
            >
              <FaCaretRight
                size={40}
                fill="var(--blue-4)"
                onClick={handleBtnClick}
              />
            </button>
          </div> */}
        {/* </figure> */}
      </section>
    </section>
  );
}

export default AboutScreen