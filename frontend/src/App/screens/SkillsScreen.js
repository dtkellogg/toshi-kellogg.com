import React, { useEffect } from "react";

// components
import SkillsFigure from '../components/SkillsFigure'


export default function SkillsScreen() {
  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="skills__container">
      <section className="skills__container--left">
        <header className="skills__header">
          <h1>Skills & Experience</h1>
        </header>
        <p className="skills__paragraph">
          <span className="skills__paragraph--1">
            My expertise is building web applications using a MERN stack.
            I have extensive knowledge and experience in <abbr title="HyperText Markup Language">HTML</abbr>, <abbr title="Cascading Style Sheets">CSS</abbr>
            (<abbr title="Syntactically Awesome Style Sheets" className="skills__blue-text">SASS</abbr>), JavaScript 
            (<span className="skills__blue-text">React</span> and <span className="skills__blue-text">Node</span>), and Redux.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--2">
            I am also able to solve algorithm problems using all of the standard strategies. 
            These include recursion, <abbr title="Depth-First Search">DFS</abbr>, <abbr title="Breadth-First Search">BFS</abbr>, <abbr title="Dynamic Programming">DP</abbr>, binary search, hash tables, arrays, and string manipulation.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--3">
            I enjoy writing code cleanly, and through my ability to patiently observe and learn from other programmers’ 
            work, I am able to write code following a uniform pattern, which is both necessary and highly effective for 
            large-scale stacks.
          </span>
          <br />
          <br />
          <span className="skills__paragraph--4">
            Please check out my projects to learn more about what I have created in JavaScript.
          </span>
        </p>
      </section>

      <section className="skills__container--right">
        <SkillsFigure />
      </section>
    </section>
  );
}