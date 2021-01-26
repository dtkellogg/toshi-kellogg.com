import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalToggleOpen } from "../actions/modalActions";

export default function Modal({ project }) {
  const dispatch = useDispatch();

  const modalIsOpen = useSelector((state) => state.modalIsOpen);
  const { isOpen } = modalIsOpen;


    // const [modalOpen, setModalOpen] = useState(true)
const handleModal = (e) => {
  e.preventDefault();
  dispatch(modalToggleOpen());
};
    return (
      <div
        className="modal"
        style={
          !isOpen
            ? { opacity: "0", backgroundColor: "transparent", display: "none"}
            : { opacity: "1", backgroundColor: "rgba(0, 0, 0, 0.685)" }
        }
      >
        <div className="modal__container">
          <div className="modal__video">lorem50 weweq r rqw</div>
          <div className="modal__title">{project}</div>
          <div className="modal__skills">lorem50 weweq r rqw</div>
          <div className="modal__paragraph">lorem50 weweq r rqw</div>
          <button className="modal__button" onClick={(e) => handleModal(e)}>
            Back
          </button>
        </div>
      </div>
    );
}