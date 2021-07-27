import React from "react";
import styles from "./Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles["banner"]}>
      <img src={props.src} />
    </div>
  );
};

export default Banner;
