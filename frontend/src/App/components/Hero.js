import React, { useEffect } from "react";

// typewritter
import Typewriter from "typewriter-effect"

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function Hero() {
  const { width } = useWindowDimensions()

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="home__container home__container--left">
      <div>
        <span className="fadeInAnimated--1 home__text--im font-size-1" font-size-0>Hello, I'm</span>
        <span className="fadeInAnimated--1 home__text--toshi font-size-1">Toshi.</span>
      </div>
      
      {width > 608 ?
        <div>
          <div className="fadeInAnimated--1-5 home__text home__text--5 font-size-2-5">
            <span>I'm a web developer based in the Bay Area, specializing in</span> 
            {<Typewriter
              delay={4000}
              wrapperClassName="test"
              options={{
                strings: [' MERN stacks.', ' ReactJS.', ' NodeJS.', " clean code.", " SASS.", " git.", " HTML5.", " CSS3."],
                autoStart: true,
                loop: true,
              }} 
            />}
          </div>
        </div>
      : <div>
          <div className="fadeInAnimated--1-5 home__text home__text--5 font-size-2-5">
              <span>I'm a web developer based in the Bay Area</span> 
              <br />
            <div style={{display: 'flex'}}>specializing in 
              {<Typewriter
                delay={4000}
                wrapperClassName="test"
                options={{
                  strings: [' MERN stacks.', ' ReactJS.', ' NodeJS.', " clean code.", " SASS.", " git."],
                  autoStart: true,
                  loop: true,
                }} 
              />}
              </div>
          </div>
        </div>
      }
    </section>
  );
}