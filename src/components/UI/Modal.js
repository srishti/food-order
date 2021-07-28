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
      <Card className={styles["card"]}>{props.children}</Card>
    </section>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay children={props.children} className={props.className} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
