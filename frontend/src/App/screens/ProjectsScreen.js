// react
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Modal from '../components/Modal'
import Hero from '../components/Hero'
import Projects from '../components/Projects'

// actions
import { modalToggleOpen } from "../actions/modalActions";


export default function ProjectsScreen() {
  const dispatch = useDispatch()

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;

  useEffect(() => {
    document.title = "Toshi Kellogg | Web Developer";

    return () => {
      dispatch(modalToggleOpen(false));
    }
  }, [])  // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="projects">
      <Hero />
      { isOpen && <Modal /> }
      <Projects />  
    </section>
  )
}