import React from "react";
import Card from "../UI/Card";
import styles from "./Intro.module.css";

const Intro = (props) => {
  let cssClass = styles["intro"];
  if (props.className) {
    cssClass += ` ${props.className}`;
  }
  return (
    <section className={cssClass}>
      <Card className={styles["card"]}>
        <h2>Delicious food, delivered to you</h2>
        <p>
          Choose your favorite meal from our broad selection of available dishes
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </section>
  );
};

export default Intro;
