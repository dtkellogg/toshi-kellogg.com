// react
import React, { useState, useEffect, lazy } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ToastProvider } from "react-toast-notifications";

// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";

import { listProjects } from "./actions/projectActions"


// screens   
const About = lazy(() => import("./screens/AboutScreen"));
const Skills = lazy(() => import("./screens/SkillsScreen"));
const Projects = lazy(() => import("./screens/ProjectsScreen"));
const Contact = lazy(() => import("./screens/ContactScreen"));


export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(listProjects())

    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, []);  // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    if(!loading) {
      document.title = "Toshi Kellogg | Web Developer";
    }
  }, [loading])

  return (
    <>
      <ToastProvider>
        {/* <video src="/videos/video1.mp4" type="video/mp4" autoPlay playsInline muted loop className="background-video"/> */}
        <div className="container__main">
          <Nav />
          <main className="container__body">
            {!loading ?
              <React.Suspense fallback={<Loading />}>
                <TransitionGroup>
                  <CSSTransition timeout={250} classNames="fade" key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" render={() => <Projects/>} />
                      <Route exact path="/about" render={() => <About/>} />
                      <Route exact path="/skills" render={() => <Skills/>} />
                      <Route exact path="/projects" render={() => <Projects/>} />
                      <Route exact path="/contact" render={() => <Contact/>} />
                      <Route path="*" render={() => <Projects/>} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Suspense>
            : <Loading />
            }
          </main>
        </div>
      </ToastProvider>
    </>
  );
}