import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  let cssClass = styles["input"];
  if (props.className) {
    cssClass = `${props.className} ${cssClass}`;
  }

  return (
    <div className={cssClass}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input {...props.input} />
    </div>
  );
};

export default Input;
