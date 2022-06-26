import React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import './Modal.css'


const Backdrop = ({hideLoginModal}) => {
  return <div onClick={() => hideLoginModal(true)} className="backdrop"></div>;
};

const ModalOverlay = ({ children }) => {
  return <div className="modal">{children}</div>;
};

const Modal = ({ children , hideLoginModal}) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop hideLoginModal={hideLoginModal} />, document.getElementById("modal"))}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};


export default Modal;