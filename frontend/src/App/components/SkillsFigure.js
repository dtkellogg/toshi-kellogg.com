import React from 'react'

export default function SkillsFigure() {
    return (
      <div className="tabs fadeInAnimated--3">
        <input
          id="tab-1"
          type="radio"
          name="radio-set"
          className="tab-selector-1"
          defaultChecked={true}
        />
        <label htmlFor="tab-1" className="tab-label-1">
          HTML
        </label>

        <input
          id="tab-2"
          type="radio"
          name="radio-set"
          className="tab-selector-2"
        />
        <label htmlFor="tab-2" className="tab-label-2">
          CSS
        </label>

        <input
          id="tab-3"
          type="radio"
          name="radio-set"
          className="tab-selector-3"
        />
        <label htmlFor="tab-3" className="tab-label-3">
          JS
        </label>

        <input
          id="tab-4"
          type="radio"
          name="radio-set"
          className="tab-selector-4"
        />
        <label htmlFor="tab-4" className="tab-label-4">
          React
        </label>

        <input
          id="tab-5"
          type="radio"
          name="radio-set"
          className="tab-selector-5"
        />
        <label htmlFor="tab-5" className="tab-label-5">
          Node
        </label>

        <input
          id="tab-6"
          type="radio"
          name="radio-set"
          className="tab-selector-6"
        />
        <label htmlFor="tab-6" className="tab-label-5">
          Redux
        </label>

        {/* <div className="clear-shadow"></div> */}

        <div className="content">
          <div className="content-1">
            <p>
              As with most web developers, my journey began by learning the
              fundamentals of HTML. As this is not technically considered
              programming, it allowed me to get my feet wet in basic web design,
              as I had never attempted the art myself. Being self taught, I was
              able to learn the basics, such as HTML tags and attributes,
              relatively quickly. The nuaisses, however, have come more slowly
              as have experimented and learn a far share through practical
              applications. These include differentiating between HTML tags such
              as &lt;p&gt;, &lt;span&gt;, and &lt;div&gt;.
            </p>
            <p>
              From here, I learned to apply HTML nomenclature to JSX in React
              JS. Of course, learning HTML is only the tip of the iceberg in
              regards to being a proficient programmer, but I nonetheless
              realize its importance.
            </p>
            <p>
              If you go to the projects page, you will find two applications
              that were built primarily to implement what I taught myself about
              HTML (and CSS). These are Thalassa Dive Resort and Indonesia
              (2015).
            </p>
          </div>
          <div className="content-2">
            <p>
              After learning the basics of HTML, the obvious next course of
              action was to learn the basic principles of CSS. This of course
              began with the Box Model, but quickly involved tackling pseudo
              elements and pseudo classes. When I felt confident that I had a
              solid understanding of all three of these concept, I moved on to
              Flexbox and CSS grid. These were relatively easy to understand
              thanks to online courses by Jonas Schmedtmann. From there, I
              continued under Schmedtmann’s guidance and learned more advanced
              CSS, such as using the SCSS framework, the pragmatic BEM naming
              convention, and media queries for different sized devices.
            </p>
            <p>
              After some time getting used to this new language, I gained enough
              confidence to teach myself other concepts (mainly through
              YouTube), such as traditional class based animations and SVG
              animations. Although I know that there is much more to learn (such
              as three.js), I have myself enjoying learning and applying what I
              can, and I had truly desire to keep expanding my knowledge.
            </p>
          </div>
          <div className="content-3">
            <p>
              After achieving a working knowledge of both HTML and CSS, I felt
              confident enough to tackle an actual programming language. I
              initially learning Ruby to gain admittance to my bootcamp of
              choice (App Academy). Unfortunately, my timing coincided with the
              onset of COVID-19, and due to App Academy’s failure to adjust
              their prices accordingly (I was mainly interested in making
              connections with people in the field), I decided to teach myself.
            </p>
            <p>
              I soon realized that the internet had much better resources
              (including my instructor of choice, Jonas Schmedtmann) for an
              amateur to learn JavaScript.
            </p>
            <p>
              To be very honest, it took me a fair length of time to gain a
              working understanding of JavaScript. This I attribute to getting
              used to the syntax itself, but also as I was working concurrently
              on my own tutoring business (Kellogg Tutoring). As with any
              language, however, time proved to be fundamental. I spent
              countless hours practice and studying from professionals in the
              field, and eventually I felt confident. I pride myself on having a
              strong math background and ability to think rationally,
              methodically, and linguistically (Spanish and Japanese), and these
              no doubt helped me learn my first programming language.
            </p>
          </div>
          <div className="content-4">
            <p>
              Once I was able to achieve an applicable level of understand of
              HTML, CSS and JS, I learned that the easiest way to get an app up
              and running with both a front and back end is to use a framework.
              Having already leared JS and it being 2020, React seemed an
              obvious choice for someone relatively new to the work of
              programming.
            </p>
            <p>
              As it was, this part of my learning happened to take the most
              time. I ended up spending hundreds of hours going through online
              courses by Jonas Schmedtmann, Tyler McGinnis, Brad Traversy, and
              Colt Steele. I am someone who sometimes takes more time to process
              things, but I end up truly conceptually learning what I am trying
              to learn. I have applied this to my own personal tutoring
              business, as I have even taught classes that I have never taught
              in previous years. However, as the long list of instructors show,
              the whole process took me quite a while.
            </p>
            <p>
              I began by learning the fundamentals of the class based React
              syntax. However, by the time I started learning the framework,
              React Hooks had already an extremely popular alternative to its
              predecessor. Therefore, I learned everything there was to know
              about class hooks, but I haven’t honestly memorized all of the
              fundamental aspects of the syntax.
            </p>
            <p>
              However, I now have a level of understanding of React Hooks that I
              feel truly confident with. If needed, I can learn to convert class
              based React components to hooks, as I have prioritized other
              aspects of programming but don’t view it as entirely that
              difficult.
            </p>
            <p>
              I have honestly been enjoying working with React a lot, and I
              really want to elevate my abilities by learning from a proven
              professional (my grunt work stills are second to none, but I am
              also quite capable to writing web applications on my own).
            </p>
          </div>
          <div className="content-5">
            <p>
              To continue with my web development skills, and having learned a
              frontend framework, I decided to learn Node.js. Before
              implementing Node.js via the Express framework, I learned the
              fundamentals of Node. This includes how it is single threaded (you
              must avoid blocking the event loop), it’s uses (APIs, data
              streaming, real-time chat) as well as its limitations to heavy
              server-side processing. I also learned about Modules and how you
              can use make your own or import third party packages from NPM. I
              also learned about how requests are made, what they are, and how
              to implement them, as well as routing. 
            </p>
            <p>
              When I finally started
              learning Node using Express, I familiarized myself with the file
              structure (a server module, routes, controllers, models) and even
              how to seed sample data. Most importantly, through many months of
              practice, I have become able to truely understand how data is
              moving around my application on the backend, and how all the
              fundamental divisions of express function and work together. 
            </p>
            <p>
              In an
              effort to take my backend understanding and be able to produce a
              full stack application, I also learned how to use MongoDB and
              Postman. 
            </p>
            <p>
              As with the other aspects of my own mental programming
              database, I realize that there is still much more to learn.
              However, I feel confident with the fundamentals and can full
              utilize what I have learned to build full stack applications. So
              far, my own personal full stack applications include a website for
              my tutoring business, this website, and a project I made for a
              philanthropy in Davis. I have also built full stack applications
              following in the instruction of Jonas Schmedtmann, Tyler McGinnis,
              and Brad Traversy.
            </p>
          </div>
          <div className="content-6">
            <p>
              To take my programming skills one step further, I decided to learn
              the popular state management framework Redux. As with everything
              else, this took me a few applications to feel confident enough to
              say that I understand the basics and can apply it in applications.
              I understand that Redux is also used with other programming
              languages, so I prioritized learning this framework.
            </p>
            <p>
              Luckily, I was able to take an excelled course by Tyler McGinnis.
              This course outlined and taught me all the basic fundamentals.
              This includes understanding how the store holds all the state and
              can be accessed in any part of the application by wrapping the app
              in a provider, how reducers change the state based on methods
              defined in actions, and how to to use react-redux to interact with
              the store.
            </p>
          </div>
        </div>
      </div>
    );
}

