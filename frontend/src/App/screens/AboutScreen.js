// react
import React, { useEffect, useState } from 'react'

import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

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
    <div className="about__container">
      <div className="about__container--left">
        <h1 className="about__header text-size-1 fadeInAnimated--0">
          About
        </h1>
        <div className="about__text">
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
        </div>
      </div>

      <div className="about__container--right fadeInAnimated--5">
        <div className="about__container--img">
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
        </div>
      </div>
    </div>
  );
}

export default AboutScreen