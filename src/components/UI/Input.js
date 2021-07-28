import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  let cssClass = styles["input"];
  if (props.className) {
    cssClass = `${props.className} ${cssClass}`;
  }

  return (
    <div className={cssClass}>
      {props.label && <label htmlFor={props.input.id}>{props.label}</label>}
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
