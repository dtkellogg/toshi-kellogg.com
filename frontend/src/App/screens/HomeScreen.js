import React, { useEffect } from "react";

import { useToasts } from "react-toast-notifications";

function HomeScreen() {

  useEffect(() => {
    window.setTimeout(() => {
      addToast(`Looking for a great software engineer? Serendipitously, your search is over.`, {
        appearance: "info",
        autoDismiss: true,
      });
    }, 6500);
  }, [])

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  const { addToast } = useToasts();

  return (
    <section className="home__container">
      <header className="home__container--left">
        <div className="fadeInAnimated--0 home__text home__text--1 text-size-3">Hello,</div>
        <div className="home__text home__text--2 text-size-0">
          <span className="fadeInAnimated--1 home__text--im">I'm</span>
          <span className="fadeInAnimated--1-5 home__text--toshi">Toshi</span>
        </div>
        <div className="fadeInAnimated--2-25 home__text home__text--3 text-size-2">I like to build JavaScript applications.</div>
        <div className="fadeInAnimated--3 home__text home__text--5 text-size-3">I am a web developer based in the San Francisco Bay Area, specializing in MERN stacks.</div>
      </header>

      {/* <div className="home__container--right text-size-tk home__text--tk fadeInAnimated--4">TK</div> */}
      <section className="home__container--right">
        {/* <video src="/videos/video1.mp4" type="video/mp4" autoPlay muted loop className="background-video"/> */}
      </section>
    </section>
  );
}

export default HomeScreen;
