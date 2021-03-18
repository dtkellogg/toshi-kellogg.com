const projects = [
  {
    name: "Kellogg Tutoring",
    skills: ["NodeJS", "React", "React-router", "Redux", "SCSS"],
    description__1:
      "This is a full stack MERN application I made and designed for my own small business. This project applied the depth of my knowledge in regards to MERN stacks, Redux, and SCSS. Before attempting to take on any paid clientele, I thought what better way to practice my MERN stack skills than by making a website for something that I am personally invested. The application also gave me a platform to make my company more legitimate, as well as giving my students and their parents a place to keep track of appointments. As this is essentially the culmination of my work so far(granted, not everything concept can be displayed), I worked hard to put forth a piece of work that is representative of my current level of understanding of programming.",
    description__2:
      "This project gave me what I needed most, which is experience. As someone who makes a living by teaching, I understand that to truly master a new skill, you have to practice organically producing the concept from your own mind. This really comes out when you practice. Besides practicing what I had already learned to look for areas of my understanding that needed attention, I used this application to practice implementing what I learned about Redux. Practicing it in my own application helped me understand how the store.js, reducers, and actions interact. Additionally, I made the project in a way so that I could practice the fundamentals of an eShop. This is mainly in regards to making payments by adding appointments to a “cart, ” and then eventually paying for them.",
    description__3:
      "The application is a MERN stack that uses SCSS as my CSS preprocessor and Redux to manage state. I had practiced Redux in other educational projects, but this was my first application where the creation of the Redux management system came organically. The HTML/ JSX and CSS / SCSS aspects of this project are pretty standard. The BEM naming convention is used as I find it a great asset to help manage and organize classes. The JSX combines necessary JavaScript methods to make code more concise. The Redux side of the application uses a standard file structure(store.js, reducers, actions, constants). The backend is make with Express.As with Redux, a standard file system is used(server.js, routes, controllers, middleware). MongoDB is set up also conventionally. Models and a config directory are used to organize the data flow. The React side is made with create-react-app. Standard naming conventions are also used. Users can sign make a profile, which they can use to schedule, view and pay for appointments. Additionally, users can leave review, and sent messages directly to my email. Admins can also be registered who can manage appointments and reviews by deleting, updating / verifying, and creating them.",
    picture: "../img/kelloggtutoring.png",
    video: "../videos/kelloggtutoring.mov",
    github: "https://github.com/dtkellogg/KelloggTutoring",
    url: "https://kelloggtutoring.com",
  },
  {
    name: "Davis Night Market",
    skills: ["NodeJS", "React", "React-router", "CSS3"],
    description__1:
      "This application was initially designed to be used by a philanthropy in Davis whose work I really admire. In the end, I decided not to give my work to the group as they mistreated one of their founders, who is a dear friend of mine.",
    description__2:
      "Through the process of designing and creating this application, I was able to learn about and test my functional knowledge. As a teacher myself, I have learned to appreciate the art of fucking up. Once you accept that making mistakes is an essential part to learning, and that it is not something to be ashamed of, you will be able to master what concepts you desire. Inevitably, I did feel embarrassed quiet a bit at the mistakes I was making (mainly, using a .gitignore file correctly). To that extent, I learned a lot about git, specifically how to incorporate it into your app so that your code can be uploaded to github as a simple application or with submodules. After countless mistakes, I finally created my own notes on how exactly to accomplish this goal. Other small details include seeing what naming conventions I prefer (such as Pages vs Screens as directories) and designing an overall night time theme with a starry night animation background. This was the first time I created a full MERN stack on my own, and this project served as a fundamental part of my understanding of how data moves throughout the entire stack.",
    description__3:
      "The application is a MERN stack with SCSS as the chosen CSS preprocessor. The file structure used was getting organizationally to where I am at today, but it admittedly is not ideal. The frontend directory is labeled as NM2 simply due to problems uploading my code to git; it was initially a submodule that I couldn’t quiet incorporate into my main repository. The backend of the application is in the root, which despite finding this as a common practice amongst some professionals, I find taxing to navigate. The standard BEM naming convention was used and practiced to further experiment with functional names.  Express was used as my chosen framework to write my Node.js backend. Visitors to the site can sign up for a newsletter (Mailchimp) and send messages to my email (Nodemailer). The frontend was built using create-react-app. The file structure is pretty standard, but follows a slightly less refined naming convention than what I currently use. Nonetheless, I want to keep it this way for my own reference and future considerations about the matter. Mapbox was used to set a map, which I proudly figured out that I can use with the full width of the UI while still getting the application to scroll if on the map in mobile. To accomplish this, I used a simple overlay with a greater z-index. Of course, this is relatively basic, but getting myself to design concepts independently is nonetheless exciting and necessary to become a professional software engineer.",
    picture: "../img/nightMarket.png",
    video: "../videos/nightMarket.mov",
    github: "https://github.com/dtkellogg/night-market-mern",
    url: "https://shrouded-thicket-84837.herokuapp.com",
  },
  {
    name: "Thalassa Dive Resort",
    skills: ["HTML5", "SCSS"],
    description__1:
      "This project was made to practice CSS. This not only includes fundamentals, such as Flexbox, CSS Grid, and the many CSS properties, but also a few more advanced tools. These include SCSS and general UX design incorporation.",
    description__2:
      "As CSS and SCSS were not much more than concepts to me at this point, practicing actually using implementing what I learned proved to give me the most knowledge. I also was able to practice using NPM to install dependencies and run/design scripts. As with CSS, the application of what I had taught myself in these areas proved valuable, as I now feel confident in both areas.",
    description__3:
      "The code is nothing more than a HTML and CSS; no boiler plate or framework was used. However, a professional file structure was used, including directories for abstracts, base, components, layout, pages, themes and vendors. Although I have not found a better file system, this was a necessary step to testing out what I most rational. As this project was intended to focus on CSS, all animations were designed using cascading style sheets. These include aesthetically pleasing button and card animations, as well as the use of the cubic-bezier property on the navigation links. Additionally, the search bar responds to user actions. SVG icons were used with colors corresponding to their individual organization.",
    picture: "../img/thalassa.png",
    video: "#",
    github: "https://github.com/dtkellogg/thalassa",
    url: "https://thalassa-website.herokuapp.com/",
  },
  {
    name: "Indonesia (2015)",
    skills: ["HTML5", "CSS3", "JavaScript"],
    description__1:
      "This was the first completely independent project that I made. It was intended to gain experience applying what I had taught myself about HTML, CSS, and JavaScript. To increase my interest in the project, I decided to make it about one of my favorite activities in life: traveling. The project displays highlights from my fourth trip to Indonesia.",
    description__2:
      "As this was my first true solo programming endeavor, I was able to learn a lot about HTML, CSS and JavaScript simply through application. In regards to HTML, I learned how the standard markup language is organized between a head and a body, and the relevant code per each. I also got to learn the nuances between similar HTML tags, such as divs, sections, spans and ps, and classes and IDs. Furthermore, I was introduced to HTML entities to display special characters (such as &mdash; for a longer, more visually pleasing dash). This application also helped further my understanding of using jQuery and JavaScript to create simple animations to aid with UX. When I eventually decided to push my code up to github, I learned how to run a static webpage on Heroku through scripts in the applications package.json file.",
    description__3:
      "The code, as stated before, was relatively simple. Beyond a standard file system for HTML and CSS, I also wrote a directory for JavaScript. The relevant code is used for animating sections. Mapbox was used for the first time. Although I hadn’t quite leaned the in’s and out’s, trying it out was a big first step. The CSS side of things use SVGs, which I found to be an improvement for ion icons for reasons that I would later truly understand (SVG animations). In addition, simple hover animations were implemented.",
    picture: "../img/indonesia2015.png",
    video: "#",
    github: "https://github.com/dtkellogg/indonesia2015",
    url: "https://indonesia2015.herokuapp.com/",
  },
  {
    name: "Hackernews Clone",
    skills: ["React", "React-router", "CSS3"],
    description__1:
      "This project was part of a React course by Tyler McGinnis. It was designed to teach how to use React with functional components, React Router, JSX, and interacting with an API from the client side.",
    description__2:
      "By going through the process of making this application, I was able to get a very good understanding of React, so that I felt confident to work with the framework upon its completion. The hands-on experience of creating this taught me a lot about React Hooks, such as the fundamental built in hooks (useReducer, useState, useEffect, useContext, etc.) as well as React Router, and JSX syntax. The React Router part of the application was simple, yet it helped me understand how to use its own built in functionality, such as Links and Routes and getting data from a url using useParams. The application also helped me understand how to apply the DRY principle to programming, as well as slimming down components by moving logic/functions to separate documents. Finally, I was able to practice working with a real API. As basic as that sounds, it was undoubtedly crucial towards my development as a programmer. I found it especially intriguing and useful to my overall understanding as it was all done on the front end, something that I appreciate knowing now that I do it mainly via Express.",
    description__3:
      "The application does have a back end directory, but this was used solely to run it on Heroku. The frontend is made with create-react-app. The file structure follows a fairly standard convention, as there are directories for components, contexts, css, and utils. The built in hooks of React are seen throughout used properly. One example of this is useReducer, which is used to send requests and handle responses from the Hacker News API. Once responses from the API were received, data was then shown on the client side. The logic within functional components has been moved out to separate components to improve readability and understanding of the components themselves. JSX is used properly, with fundamental application of ternary operators and the double ampersand as an alternative, when necessary. useContext was used to share a theme throughout the application. This variability in theme was being able to elect to use a dark mode interface.",
    picture: "../img/hackerNewsClone.png",
    video: "#",
    github: "https://github.com/dtkellogg/hacker-news-clone",
    url: "https://kellogg-hacker-news.herokuapp.com/",
  },
  {
    name: "Github Battle",
    skills: ["React", "React-router", "SCSS"],
    description__1:
      "This application was made as part of Tyler McGinnis’s React hooks course. The app was made from scratch (without a boilerplate i.e. create-react-app), and thus not only taught about React Hooks, but also discussed the inner workings of webpack.",
    description__2:
      "This course taught me a lot about React. It includes the use of many of React’s useful functionality, from providing a context or theme throughout the application to discussing the advantages of importing files when necessary to improve load speeds. The course also involved creating my first custom hook, as well as the fundamentals of React Router. Besides going into the different aspects of React Hooks, the course did an excellent job illustrating what create-react-app does because the application was built from scratch. Unfortunately, I have been unsuccessful with running the app on Heroku due to a current inadequate understanding of webpack. Nonetheless, the process of going through creating my own webpack file has given me the foundation to learn more about the topic on my own.",
    description__3:
      "As stated previously, the application has been built from scratch, including the index.html and webpack. The project is divided into two main directories, although the backend was built only to host the application on Heroku. The application follows fairly standard React architecture, as the React side is still connected to the application through a node.",
    picture: "../img/githubBattle.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-github-battle",
    url: "https://github-battle.ui.dev/",
  },
  {
    name: "Tetris",
    skills: ["React", "CSS3"],
    description__1:
      "I chose this project independent of any paid class I signed up for as I thought it would expose me to a different implementation of web design than websites. This project introduced me to different applications of JS, helping me understand a bit more of its potential.",
    description__2:
      "This application taught me how to create a game using React. It taught me about how I can break down a game into JavaScript, and it got me thinking of how I can potentially apply this thought process in future endeavours. The application also taught me about a popular CSS technique in React: Styled Components. Although I prefer to use CSS classes and SASS, I find it useful as knowing the various different syntaxes is necessary to understand all React code. The app also taught me about keycodes and how they can be implemented.",
    description__3:
      "The project has both front and back ends, but the back end is built solely to run the app on Heroku. The front end was built using create-react-app, and has directories for components, font, hooks, and images. The components directory is further divided, as there is a directory holding styled components for each component. The CSS file is thus relatively concise, as it only has code for non component aspects. The logic is logically broken down from the largest scale (the board/stage) to the smallest (a single cell). Tetrominos, or the tetris pieces, are written as matrices. Component logic is broken down not only into smaller components, but also taken out and placed in custom hooks.",
    picture: "../img/tetris.png",
    video: "#",
    github: "https://github.com/dtkellogg/tetris",
    url: "https://kellogg-tetris.herokuapp.com/",
  },
  {
    name: "Hangman",
    skills: ["React", "CSS3"],
    description__1:
      "This project was completed as part of a React course. The project not only helped me understand the built in hooks of React, such as useReducer, but it also helped illustrate the differences in concepts and application of class based and functional components.",
    description__2:
      "Being as this was one of my very first projects with React, I learned a lot simply by doing. The process of coding through the project helped me understand how functionality in class based components is processed differently than in functional ones. For example, I now understand how lifecycle is handled differently as functional components use useEffect while class based ones use componentDidMount, componentWillUpdate and componentWillUnmount. Besides React, the project taught me about applying coding logic to a game. Although I have completed many kata in CodeWars, my application of coding/JS has been restricted to web development. This game provided me with a much appreciated, different aspect that adds to my interest in software development.",
    description__3:
      "This game was made starting with a template provided by Colt Steele. I was then tasked to make the application using class based components, which I have left as comments for future reference. The React file structure is fairly poor, with a lack of directories in the src folder. This is because I had not learned a proper method of organizing my files. Nonetheless, I want to leave it as it is that I can refer back to where I was at one point. There is only a single file for the React side of the Hangman application. From my understanding, this was to help understand the logic of what exactly is going on. There is also a single CSS and JS file, although the CSS has non component based code in two other CSS files. Of note, there is a context directory. This was used to hold the state for the word being guessed as well as the generation of buttons. The application also includes a set of pictures that was designed to show the state of the hanged man. Despite this being an alternative way of doing things, a mastery of CSS could accomplish the same goal while using less memory.",
    picture: "../img/hangman.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-hangman",
    url: "https://kellogg-hangman.herokuapp.com/",
  },
  {
    name: "Omnifood",
    skills: ["HTML5", "CSS3", "JavaScript"],
    description__1:
      "This was my first web development project that incorporated HTML, CSS and JS. It was part of a course by Jonas Schmedtmann.",
    description__2:
      "This project gave me hands-on experience to feel more comfortable applying HTML, CSS and JS together in a single application. In regards to HTML, I learned basics such as creating links, making forms and using icons. The CSS helped me solidify my understanding of Flexbox and helped think about how to name classes (not BEM, but still helpful to see someone else’s naming style. The CSS is this course also taught me how to support functionality across all browsers using webkit. The project taught me about basic web design and gave me ideas for future endeavors. The JavaScript taught me how to animate portions of the UI to add a better user experience.",
    description__3:
      "The code is composed of two main directories: resources and vendors. The vendors, as I found out here, are code snippets or multimedia that come from external sources. The resources folder holds the CSS and JS code. Everything else is pretty standard.",
    picture: "../img/omnifood.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-omnifood",
    url: "https://kellogg-omnifood.herokuapp.com/",
  },
  {
    name: "Nexter",
    skills: ["HTML5", "CSS3"],
    description__1:
      "This project was built as part of Jonas Schmedtmann’s advanced CSS course. It focused on concepts including CSS Grid and flexbox, while also offering insight into UX design through picture layering and the photo gallery. This project was focused on SASS.",
    description__2:
      "This course taught me a lot about both the conceptual side of CSS as well as ways that CSS can be applied to create beautiful websites. In addition, I also got to learn how to use SASS and implement its BEM naming convention.",
    description__3:
      "The code is fairly standard, with no backend and with all directories (besides the node modules) in the root. HTML was used for content, with a link to fonts and the style sheet. The body is composed of a header, sections & divs, and a footer. The SASS code is all found in one directory, with that being the extent of its organization. The utilization of CSS brings the HTML code to life. This can be seen in the header, cards, and image gallery, which all beautifully visualize the data.",
    picture: "../img/nexter.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-nexter",
    url: "https://kellogg-nexter.herokuapp.com/",
  },
  {
    name: "Natours",
    skills: ["HTML5", "SCSS"],
    description__1:
      "This is a project that is part of Jonas Schmedtmann’s Advanced CSS course. The focus was on learning how to use SASS, as well as learning some usual application of CSS to drive animations.",
    description__2:
      "This course helped me understand and learn how to apply various CSS concepts. Not only did I learn how to animate using only CSS, but I also learned how to created color gradients in texts, how to use pseudo classes to add effects to buttons and text, how to use clip-path to ambiguous create polygons, and the different states of a button. The course also taught me about SASS, including a logical file structure and the BEM syntax. These methods have drastically organized my CSS, something that I have learned to value as I have used it since. Making this project helped me understand what directory different types of CSS go to. Of minor significance, I also learned how to create the same effect of CSS Grid with only Flexbox. This is obviously not necessary for future projects as CSS Grid simplifies the process. But it helped me see how the two are related, and eventually understand how to use them both together (which I have read is the intended use).",
    description__3:
      "The code is relatively basic, with no backend or frontend framework. There is a SASS directory in the root that is organized into directories for abstracts, base, components, layout, and pages. A directory containing the images of the application takes up a majority of the file size and can also be found in the directory. An index.html holds all the relevant HTML.",
    picture: "../img/natours.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-natours",
    url: "https://kellogg-natours.herokuapp.com/",
  },
  {
    name: "Hash Basketball",
    skills: ["React", "React-router", "CSS3"],
    description__1:
      "This project was made as part of Tyler McGinnis’s React Router V5 course. It focused on implementing the different built in hooks of React Router.",
    description__2:
      "As this course's intention, I was able to learn about React Router V5 and how to use it. The different hooks from the react-router-dom package comprised a majority of the focus, and application as well as Tyler’s instruction made it very easy to understand. I did not master React Router simply by completing this course; it did, however, give me enough base knowledge to experiment with areas that my understanding was weak in when I applied it to different projects.",
    description__3:
      "The code consists of both front and back ends, but the back end is built only to run the application on Heroku. The frontend was built using create-react-app. It is composed of two main directories (components and hooks) and CSS files. As the focus of the project was on React Router, much of the meat of the code focuses on areas such as the switch and its relevant routes (used in multiple functions for nested routes), creating a custom Link with an active class, and using useParams to extract IDs from the URL. The six different custom hooks deal with making requests and using responses from an API (from the frontend).",
    picture: "../img/hashBasketball.png",
    video: "#",
    github: "https://github.com/dtkellogg/kellogg-hash-basketball",
    url: "https://kellogg-hash-basketball.herokuapp.com/",
  },
];

module.exports = projects;
