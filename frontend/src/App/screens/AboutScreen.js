// react
import React, { useEffect, useState } from 'react'

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// components
import SkillsFigure from '../components/SkillsFigure'

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
    <>
    <section className="about__container">
      <section className="about__container--left">
        <header className="about__header fadeInAnimated--0">
          <h1 className="text-size-1">
            About
          </h1>
        </header>
        <section className="about__text">
          <span className="about__text--1 text-size-3 fadeInAnimated--1">
            A self taught, yet well rounded programmer with a strong background and understanding of data structures and algorithms.
          </span>
          <br />
          <br />
          <span className="about__text--2 text-size-3 fadeInAnimated--2">
            Coming from a bicultural background, thinking in different languages has always been a part of my psyche. Having completed 
            my bachelor’s at UC Davis in Chemistry, I bring to the table a strong understanding of the fundamentals of mathematics, science and English. 
            Coupled with extensive experience teaching high school and college students, I have fine tuned my problem solving skills to be able to write 
            code efficiently and logically.
          </span>
          <br />
          <br />
          <span className="about__text--3 text-size-3 fadeInAnimated--3">
            Besides knowing the material, my success in teaching has come from an innate ability to maintain patience and listen attentively. 
            I prioritize a clean, systematic lifestyle, which I incorporate into my code.
          </span>
          <br />
          <br />
          <span className="about__text--4 text-size-3 fadeInAnimated--4">
            When I am not programming, I enjoy spending my time running or reading a novel. What truly inspires me in life is traveling, as I 
            have been fortunate enough to have already been to many amazing places. I hope to continue my travels as I build more web applications in the future.
          </span>
        </section>
      </section>

      <section className="about__container--right fadeInAnimated--4">
        <figure className="about__container--img">
          <img
            src={image.src}
            alt="My mom, dog and I (circa 2010)"
            className={image.src === toshiHeadshot ? "about__image--toshi-headshot" : "about__image--about"}
          />
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
        </figure>
      </section>
    </section>
    <section className="skills__container">
      <section className="skills__container--left">
        <header className="skills__header fadeInAnimated--5">
          <h1 className="text-size-1">Skills & Experience</h1>
        </header>
        <p className="skills__paragraph">
          <span className="skills__paragraph--1 text-size-3 fadeInAnimated--6">
            My expertise is building web applications using a MERN stack.
            I have extensive knowledge and experience in <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>
            (<abbr title="Syntactically Awesome Style Sheets" className="skills__blue-text">SASS</abbr>), JavaScript 
            (<span className="skills__blue-text">React</span> and <span className="skills__blue-text">Node</span>), and Redux.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--2 text-size-3 fadeInAnimated--7">
            I am also able to solve algorithm problems using all of the standard strategies. 
            These include recursion, <abbr title="Depth-First Search">DFS</abbr>, <abbr title="Breadth-First Search">BFS</abbr>, <abbr title="Dynamic Programming">DP</abbr>, binary search, hash tables, arrays, and string manipulation.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--3 text-size-3 fadeInAnimated--8">
            I enjoy writing code cleanly, and through my ability to patiently observe and learn from other programmers’ 
            work, I am able to write code following a uniform pattern, which is both necessary and highly effective for 
            large-scale stacks.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--4 text-size-3 fadeInAnimated--9">
            Please check out my projects to learn more about what I have created in JavaScript.
          </span>
        </p>
      </section>

      <section className="skills__container--right fadeInAnimated--5">
        <SkillsFigure />
      </section>
    </section>
    </>
  );
}

export default AboutScreen