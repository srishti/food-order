import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  let cssClass = styles["button"];
  if (props.primary) {
    cssClass += ` ${styles["primary"]}`;
  }
  if (props.className) {
    cssClass = `${props.className} ${cssClass}`;
  }

  return (
    <button
      className={cssClass}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
