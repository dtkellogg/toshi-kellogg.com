import React from "react";

function HomeScreen() {
  // React.useEffect(() => {
  //     document.title = "Toshi Kellogg | Developer";
  // });

  return (
    <div className="home">
      <div className="fadeInAnimated--0 home__text home__text--1 text-size-3">Hello,</div>
      <div className="home__text home__text--2 text-size-0">
        <span className="fadeInAnimated--1 home__text--im">I'm</span>
        <span className="fadeInAnimated--1-5 home__text--name">Toshi</span>
      </div>
      <div className="fadeInAnimated--2-25 home__text home__text--3 text-size-1">I like to build things for the web.</div>
      <div className="fadeInAnimated--3 home__text home__text--5 text-size-3">I am a novice web developer based in San Francisco, specializing in MERN stacks.</div>
    </div>
  );
}

export default HomeScreen;
