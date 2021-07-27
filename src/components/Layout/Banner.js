import React from "react";
import mealsImage from "../../assets/meals.jpeg";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles["banner"]}>
      <img src={mealsImage} alt="Meals Banner" />
    </div>
  );
};

export default Banner;
