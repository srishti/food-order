import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import DUMMY_MEALS from "./dummy-meals";
import styles from "./Meals.module.css";

const Meals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem key={meal.id} meal={meal} />;
  });

  return (
    <section className={styles["meals"]}>
      <Card>
        <ul className={styles["meals-list"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Meals;
