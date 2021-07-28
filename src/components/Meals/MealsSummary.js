import React from "react";
import Card from "../UI/Card";
import styles from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={styles["summary"]}>
      <Card className={styles["card"]}>
        <h2>Delicious food, delivered to you</h2>
        <p>
          Choose your favorite sweets from our broad selection of available
          sweets and get a sweet tooth.
        </p>
        <p>
          All our sweets are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </Card>
    </section>
  );
};

export default MealsSummary;
