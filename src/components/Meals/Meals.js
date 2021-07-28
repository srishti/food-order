import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from "./dummy-meals";
import styles from "./Meals.module.css";

const Meals = () => {
  // markup for rendering list of meals
  const mealsListToRender = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={styles["meals"]}>
      <Card>
        <ul className={styles["meals-list"]}>{mealsListToRender}</ul>
      </Card>
    </section>
  );
};

export default Meals;
