const projects = [
  {
    _id: 1,
    name: "Kellogg Tutoring",
    skills: ["Node.js", "React.js", "React-Router", "Redux", "SCSS"],
    abstract: "This is a full stack MERN application I made and designed for my own small business.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    scss: ["Mixins, Extends, & Variables.", "BEM naming convention.", "7-1 pattern (7 folders, 1 file) SASS directory structure."],
    reactJS: ["Clients can view, make, and pay for appointments.", "Clients can also leave reviews and message the business.", "Admin side created to manage appointments, users, and reviews.", "Calendar made from scratch that displays the entire appointment history.", "Search bar created for easy navigation through available screens.", "Mapbox.", "Error handling with PropTypes.", "Custom hooks created.", "DRY principle applied."],
    nodeJS: ["Used the Express framework.", "Error handling using Async / Await.", "API interaction using CRUD operations.", "Nodemailer.", "Various scripts written to handle development and production.", "Seeder data for development."],
    security: ["SSL certificate.", "JSON Web Tokens.", "HTTPS."],
    picture: "../img/kelloggtutoring.png",
    video: "../videos/kelloggtutoring.mov",
    github: "https://github.com/dtkellogg/KelloggTutoring",
    url: "https://kelloggtutoring.com",
  },
  {
    _id: 2,
    name: "Davis Night Market",
    skills: ["Node.js", "React.js", "React-Router", "CSS3"],
    abstract: "This application was designed to be used by a philanthropy in Davis, CA whose work I really admire.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid used to create a image gallery.", , "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    reactJS: ["SVG animations.", "Mapbox.", "API interaction using CRUD operations via Axios.", "Custom hooks for email validation created.", "API interaction using CRUD operations.", "DRY principle applied."],
    nodeJS: ["Used the Express framework.", "Error handling using Async / Await.", "Nodemailer,", "Various scripts written to handle development and production.",],
    security: ["JSON Web Tokens.", "HTTPS"],
    picture: "../img/nightMarket.png",
    video: "../videos/nightMarket.mov",
    github: "https://github.com/dtkellogg/night-market-mern",
    url: "https://shrouded-thicket-84837.herokuapp.com",
  },
  {
    _id: 3,
    name: "Thalassa Dive Resort",
    skills: ["HTML5", "SCSS"],
    abstract: "This application is a design idea for redoing the current UI of a scuba diving resort I dove at in Sulawesi, Indonesia.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["Animations using keyframes.", "Image gallery created with CSS grid.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    scss: ["Mixins, Extends, & Variables.", "BEM naming convention.", "7-1 pattern (7 folders, 1 file) SASS directory structure."],
    security: ["HTTPS."],
    picture: "../img/thalassa.png",
    video: "#",
    github: "https://github.com/dtkellogg/thalassa",
    url: "https://thalassa-website.herokuapp.com/",
  },
  {
    _id: 4,
    name: "Indonesia (2015)",
    skills: ["HTML5", "CSS3", "JavaScript"],
    abstract: "This application is a simple 1 page HTML design to showcase highlights from my third trip to Indonesia",
    html: ["Application built without frameworks.", "Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    js: ["jQuery for animations."],
    security: ["HTTPS."],
    picture: "../img/indonesia2015.png",
    video: "#",
    github: "https://github.com/dtkellogg/indonesia2015",
    url: "https://indonesia2015.herokuapp.com/",
  },
  {
    _id: 5,
    name: "Hash Basketball",
    skills: ["React.js", "React-Router", "CSS3"],
    abstract: "This application serves as the team page for a fictional basketball team. It was made as part of a course by Tyler McGinnis.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    reactJS: ["Used most built-in React Router Hooks.", "Sidebar and navigation bar created.", "Custom hooks created.", "API interaction using CRUD operations via the Fetch API.", "DRY principle applied."],
    security: ["HTTPS."],
    picture: "../img/hashBasketball.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-hash-basketball",
    url: "https://kellogg-hash-basketball.herokuapp.com/",
  },
  {
    _id: 6,
    name: "Hacker News",
    skills: ["React.js", "React-Router", "CSS3"],
    abstract: "This project is a clone of Hacker News, and interacts with the same API. It was made as part of course by Tyler McGinnis.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    reactJS: ["Light and dark modes created.", "Error handling with PropTypes.", "API interaction using CRUD operations via the Fetch API.", "DRY principle applied."],
    security: ["HTTPS."],
    picture: "../img/hackerNewsClone.png",
    video: "#",
    github: "https://github.com/dtkellogg/hacker-news-clone",
    url: "https://kellogg-hacker-news.herokuapp.com/",
  },
  {
    _id: 7,
    name: "Tetris",
    skills: ["React.js", "CSS3"],
    abstract: "This is a vanilla JavaScript application cloning the classic puzzle game, Tetris. It was part of a course by freeCodeCamp.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    js: ["Vanilla JavaScript used for game mechanics."],
    reactJS: ["Styled components used.", "DRY principle applied."],
    security: ["HTTPS."],
    picture: "../img/tetris.png",
    video: "#",
    github: "https://github.com/dtkellogg/tetris",
    url: "https://kellogg-tetris.herokuapp.com/",
  },
  {
    _id: 8,
    name: "Hangman",
    skills: ["React.js", "CSS3"],
    abstract: "This is a React Hooks application cloning the classic word game, Hangman. It was part of a course by Colt Steele.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    reactJS: ["Appropriate JavaScript data structures and methods used for game mechanics.", "State managed through a context provider.", "DRY principle applied."],
    security: ["HTTPS."],
    picture: "../img/hangman.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-hangman",
    url: "https://kellogg-hangman.herokuapp.com/",
  },
  {
    _id: 9,
    name: "Omnifood",
    skills: ["HTML5", "CSS3", "JavaScript"],
    abstract: "This application is for a fictional high quality food delivery service. It uses a variety of vanilla Javascript and CSS techniques to make an interactive UI. It was part of a course by Jonas Schmedtmann.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["A variety of different layout designs are used.", "CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    js: ["jQuery for animations."],
    security: ["HTTPS."],
    picture: "../img/omnifood.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-omnifood",
    url: "https://kellogg-omnifood.herokuapp.com/",
  },
  {
    _id: 10,
    name: "Nexter",
    skills: ["HTML5", "CSS3", "SCSS"],
    abstract: "This application is for a fictional real estate agency. It was part of a course by Jonas Schmedtmann.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["A variety of different layout designs are used.", "CSS grid used to create a image gallery.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    scss: ["BEM naming convention."],
    security: ["HTTPS."],
    picture: "../img/nexter.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-nexter",
    url: "https://kellogg-nexter.herokuapp.com/",
  },
  {
    _id: 11,
    name: "Natours",
    skills: ["HTML5", "SCSS"],
    abstract: "This application is for a fictional travel agency. It was part of a course by Jonas Schmedtmann.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["A variety of different layout designs are used.", "Animations using keyframes.", "CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    scss: ["Mixins, Extends, & Variables.", "BEM naming convention.", "7-1 pattern (7 folders, 1 file) SASS directory structure (only 5 used)."],
    security: ["HTTPS."],
    picture: "../img/natours.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-natours",
    url: "https://kellogg-natours.herokuapp.com/",
  },
  {
    _id: 12,
    name: "GitHub Battle",
    skills: ["React.js", "React-Router", "SCSS"],
    abstract: "This application uses the Github API to battle pairs of actual GitHub users and view popular repositories by programming language. It was part of a course by Tyler McGinnis.",
    html: ["Semantic HTML.", "Consistent, clean code with proper use of white space."],
    css: ["CSS grid and flexbox.", "CSS media queries for responsive design (Desktop and Mobile views available).", "UX emphasis on accessibility."],
    scss: ["Mixins, Extends, & Variables.", "BEM naming convention.", "7-1 pattern (7 folders, 1 file) SASS directory structure."],
    reactJS: ["Light and dark modes created.", "Application built without frameworks (webpack configured manually).", "Error handling with PropTypes.", "Custom hooks created.", "DRY principle applied."],
    security: ["HTTPS."],
    picture: "../img/githubBattle.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-github-battle",
    url: "https://github-battle.ui.dev/",
  },
];

module.exports = projects;