// react
import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

// components
import Modal from '../components/Modal'
import Hero from '../components/Hero'
import Projects from '../components/Projects'


export default function ProjectsScreen() {
  const [project, setProject] = useState(""); // eslint-disable-line no-unused-vars

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  useEffect(() => {
    document.title = "Toshi Kellogg | Developer";
  }, [])

  return (
    <section className="projects">
      <Hero />
      {isOpen && <Modal project={project} /> }
      <Projects project={project} setProject={setProject} />  
    </section>
  )
}