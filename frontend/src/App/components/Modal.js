import React, { useState } from "react";

export default function Modal({ project }) {
    const [modalOpen, setModalOpen] = useState(true)

    const handleBack = () => {
        setModalOpen(false)
    }
    return (
      <div
        className="modal"
        style={
          !modalOpen
            ? { opacity: "0", backgroundColor: "transparent", display: "none"}
            : { opacity: "1", backgroundColor: "rgba(0, 0, 0, 0.685)" }
        }
      >
        <div className="modal__container">
          <div className="modal__video">lorem50 weweq r rqw</div>
          <div className="modal__title">{project}</div>
          <div className="modal__skills">lorem50 weweq r rqw</div>
          <div className="modal__paragraph">lorem50 weweq r rqw</div>
          <button className="modal__button" onClick={() => handleBack()}>
            Back
          </button>
        </div>
      </div>
    );
}