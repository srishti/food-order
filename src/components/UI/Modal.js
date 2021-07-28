import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles["backdrop"]} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  let cssClass = styles["modal"];
  if (props.className) {
    cssClass = `${props.className} ${cssClass}`;
  }

  return (
    <section className={cssClass}>
      <Card>{props.children}</Card>
    </section>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("overlay")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
