import React, {useState, useEffect} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";

// react-toast-notifications
import { ToastProvider } from "react-toast-notifications";
// import NavSecondary from "./components/NavSecondary";

// screens   
const Home = React.lazy(() => import("./screens/HomeScreen"));
const About = React.lazy(() => import("./screens/AboutScreen"));
const Skills = React.lazy(() => import("./screens/SkillsScreen"));
const Projects = React.lazy(() => import("./screens/ProjectsScreen"));
const Contact = React.lazy(() => import("./screens/ContactScreen"));
const Modal = React.lazy(() => import("./components/Modal"));


export default function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 2500);
    }, []);
    
    if(!loading) {
      document.title = "Toshi Kellogg | Developer";
    }

    return (
      <ToastProvider>
        <div className="container__main">
          <Nav />
          <div className="container__body">
            {!loading ?
              <React.Suspense fallback={<Loading />}>
                <TransitionGroup>
                  <CSSTransition timeout={250} classNames="fade" key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" render={() => <Home/>} />
                      <Route exact path="/about" render={() => <About/>} />
                      <Route exact path="/skills" render={() => <Skills/>} />
                      <Route exact path="/projects" render={() => <Projects/>} />
                      <Route exact path="/contact" render={() => <Contact/>} />
                      <Route path="*" render={() => <Home/>} />
                      {/* <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/skills" component={Skills} />
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/projects/:project" component={Modal} />
                      <Route exact path="/contact" component={Contact} />
                      <Route path="*" component={Home} /> */}
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Suspense>
            : <Loading />
          }
        </div>
      </div>
    </ToastProvider>
  );
}