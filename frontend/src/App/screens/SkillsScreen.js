import React from "react";

function SkillsScreen() {
  return (
    <div className="skills">
      <div className="skills__container--left">
        <h1 className="skills__header text-size-0 fadeInAnimated--1">Skills & Experience</h1>
        <p className="skills__paragraph">
          <span className="skills__paragraph--1 text-size-3 fadeInAnimated--2">
            The main area of my expertise is fullstack web development.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--2 text-size-3 fadeInAnimated--3">
            HTML, CSS, JS (React and Node), builing small and medium web
            applications.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--3 text-size-3 fadeInAnimated--4">
            I am looking for a position that will give me a lot of work and help
            me learn what I have not been able to teach myself.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--4 text-size-3 fadeInAnimated--5">
            Visit my LinkedIn profile for more information or contact me.
          </span>
        </p>
      </div>

      <div className="skills__container--right">
        <div className="">Insert Skills Animation</div>
      </div>
    </div>
  );
}

export default SkillsScreen;
