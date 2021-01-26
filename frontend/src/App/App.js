import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";


// components
import Nav from "./components/Nav";
import Loading from "./components/Loading";

// screens   
const Home = React.lazy(() => import("./screens/HomeScreen"));
const About = React.lazy(() => import("./screens/AboutScreen"));
const Skills = React.lazy(() => import("./screens/SkillsScreen"));
const Projects = React.lazy(() => import("./screens/ProjectsScreen"));
const Contact = React.lazy(() => import("./screens/ContactScreen"));

export default function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => setLoading(false), 3000);
    }, []);
    
    if(!loading) {
      document.title = "Toshi Kellogg | Developer";
    }


    return (
      <>
          <div className="container__main">
            <Nav />
            <div className="container__body">
            {!loading ?
              <React.Suspense fallback={<Loading />}>
                <TransitionGroup>
                  <CSSTransition timeout={250} classNames="fade" key={location.key}>
                    <Switch location={location}>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/skills" component={Skills} />
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/contact" component={Contact} />
                      <Route path="*" component={Home} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              </React.Suspense>
            : <Loading />
          }
          </div>
        </div>
      </>
    );
}