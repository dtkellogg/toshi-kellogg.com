import React from "react";

function HomeScreen() {
  // React.useEffect(() => {
  //     document.title = "Toshi Kellogg | Developer";
  // });

  return (
    <div className="home">
      <div className="fadeInAnimated--1 home__text home__text--1 text-size-3">Hello,</div>
      <div className="fadeInAnimated--2 home__text home__text--2 text-size-0">I'm Toshi</div>
      <div className="fadeInAnimated--3 home__text home__text--3 text-size-1">I like to build things for the web.</div>
      <div className="fadeInAnimated--4 home__text home__text--4 text-size-3">I am a novice web developer based in San Francisco, specializing in MERN stacks.</div>
    </div>
  );
}

export default HomeScreen;
