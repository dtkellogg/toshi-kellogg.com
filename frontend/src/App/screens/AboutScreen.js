// react
import React, { useState } from 'react'

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

// images
import aboutImage from '../img/aboutImage.jpg'
import baliemValleyImage from '../img/baliemValleyImage.jpg'

function AboutScreen() {
  const [image, setImage] = useState({
    src: baliemValleyImage,
    alt: "Me with the local headhunters (Baliem Valley, West Papua)",
    num: 1,
  });

  const handleBtnClick = () => {
    if(image.src === aboutImage) {
      setImage({
        src: baliemValleyImage,
        alt: "Me with the local headhunters (Baliem Valley, West Papua)",
        num: 1
      });
    } else {
      setImage({
        src: aboutImage,
        alt: "My mom, dog and I (circa 2010) ",
        num: 2
      });
    }
  }

  return (
    <div className="about">
      <div className="about__container--left">
        <h1 className="about__header text-size-0 fadeInAnimated--0">
          About Screen
        </h1>
        <div className="about__text">
          <span className="about__text--1 text-size-3 fadeInAnimated--1">
            Professionally new to the world of web development.
          </span>
          <br />
          <br />
          <span className="about__text--2 text-size-3 fadeInAnimated--2">
            Obsessive level of attention to detail, highly organized (and
            clean), problem solver, math lover, teammate, independent worker who
            spends his time running his own (small) business as a private tutor.
            Passionate about running, strong personal relationships, learning
            new skills, & traveling, particularly to third world countries.
          </span>
          <br />
          <br />
          <span className="about__text--3 text-size-3 fadeInAnimated--3">
            Interested in both the front and back end of web development.
            Looking to work on ambitious projects with positive people.
          </span>
        </div>
      </div>

      <div className="about__container--right fadeInAnimated--3">
        <img
          src={image.src}
          alt="My mom, dog and I (circa 2010)"
          className="about__image"
        />
        <div className="about__arrows--container">
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
        </div>
      </div>
    </div>
  );
}

export default AboutScreen