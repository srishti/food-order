import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  let cssClass = styles["card"];
  if (props.className) {
    cssClass = `${props.className} ${cssClass}`;
  }

  return <div className={cssClass}>{props.children}</div>;
};

export default Card;
