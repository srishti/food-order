import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import DUMMY_MEALS from "./dummy-meals";
import styles from "./Meals.module.css";

const Meals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <FoodItem key={meal.id} data={meal} />;
  });

  return (
    <section className={styles["meals"]}>
      <Card className={styles["card"]}>
        <ul className={styles["meals-list"]}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default Meals;
