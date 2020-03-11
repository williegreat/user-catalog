import React from "react";
import "./modal.css";
const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="close-btn-container">
                    <button onClick={handleClose}>X</button>
                </div>
                {show && children}
            </section>
        </div>
    );
};
export default Modal;
