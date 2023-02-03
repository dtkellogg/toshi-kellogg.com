import React, { useEffect } from "react";

// typewritter
import Typewriter from "typewriter-effect"

// hooks
import useWindowDimensions from '../hooks/useWindowDimensions'

export default function Hero() {
  const { width } = useWindowDimensions()

  useEffect(() => {
    document.title = "Toshi Kellogg | Web Developer";
  }, [])

  return (
    <header className="home__container home__container--left">
      <div>
        <span className="home__text--im">Hello, I'm</span>
        <strong className="home__text--toshi">Toshi.</strong>
      </div>
      
      {width > 608 ?
        <p className="home__text home__text--5">
          <span>I'm a web developer based in the Bay Area, specializing in</span> 
          {<Typewriter
            delay={4000}
            wrapperClassName="test"
            options={{
              strings: [' JavaScript.', ' React.js.', ' Vue.js.', ' CSS.', ' Node.js', ' GraphQL.', ' Next.js.', ' Nuxt.js.', ' SASS.', ' git.', ' HTML5.'],
              autoStart: true,
              loop: true,
            }} 
          />}
        </p>
      : <p className="home__text home__text--5">
          <span>I'm a web developer based in the Bay Area</span> 
          <br />
          <div style={{display: 'flex'}}>specializing in 
            {<Typewriter
              delay={4000}
              wrapperClassName="test"
              options={{
                strings: [' JavaScript.', ' React.js.', ' Vue.js.', ' CSS.', ' Node.js', ' GraphQL.', ' Next.js.', ' Nuxt.js.', ' SASS.', ' git.', ' HTML5.'],
                autoStart: true,
                loop: true,
              }} 
            />}
          </div>
        </p>
      }
    </header>
  );
}