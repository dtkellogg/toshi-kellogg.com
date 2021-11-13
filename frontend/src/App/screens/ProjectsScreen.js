// react
import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Modal from '../components/Modal'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

// actions
import { modalToggleOpen } from "../actions/modalActions";


export default function ProjectsScreen() {
  const [project, setProject] = useState("");
  const dispatch = useDispatch()

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";

    return () => {
      dispatch(modalToggleOpen(false));
    }
  }, [])

  return (
    <section className="projects">
      <Hero />
      {isOpen && <Modal project={project} /> }
      <Projects project={project} setProject={setProject} />  
    </section>
  )
}