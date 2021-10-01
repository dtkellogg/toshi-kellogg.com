import React from "react";

// components
import SkillsFigure from '../components/SkillsFigure'

function SkillsScreen() {
  return (
    <div className="skills__container">
      <div className="skills__container--left">
        <h1 className="skills__header text-size-1 fadeInAnimated--0">Skills & Experience</h1>
        <p className="skills__paragraph">
          <span className="skills__paragraph--1 text-size-3 fadeInAnimated--1">
            My expertise is building web applications using a MERN stack.
            I have extensive knowledge and experience in HTML, CSS 
            (<span className="skills__blue-text">SASS</span>), JavaScript 
            (<span className="skills__blue-text">React</span> and <span className="skills__blue-text">Node</span>), and Redux.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--2 text-size-3 fadeInAnimated--2">
            I am also able to solve algorithm problems using all of the standard strategies. 
            These include recursion, DFS, BFS, DP, binary search, hash tables, arrays, and string manipulation.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--3 text-size-3 fadeInAnimated--3">
            I enjoy writing code cleanly, and through my ability to patiently observe and learn from other programmers’ 
            work, I am able to write code following a uniform pattern, which is both necessary and highly effective for 
            large-scale stacks.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--4 text-size-3 fadeInAnimated--4">
            Please check out my projects to learn more about what I have created in JavaScript.
          </span>
        </p>
      </div>

      <div className="skills__container--right">
        <SkillsFigure />
      </div>
    </div>
  );
}

export default SkillsScreen;