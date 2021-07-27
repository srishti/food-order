import React from "react";
import Card from "./Card";
import styles from "./Modal.module.css";

const ModalContent = (props) => {
  return <div className={styles["modal-content"]}>{props.children}</div>;
};

const Backdrop = (props) => {
  return <div className={styles["backdrop"]}></div>;
};

const Modal = (props) => {
  let cssClass = "";
  if (props.className) {
    cssClass += ` ${props.className}`;
  }
  return (
    <section className={cssClass}>
      <Card>
        <ModalContent children={props.children} />
        <Backdrop />
      </Card>
    </section>
  );
};

export default Modal;
