import React from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props.meal;

  const formattedPrice = `INR ${price.toFixed(2)}`;

  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-info"]}>
        <h4>{name}</h4>
        <em>{description}</em>
        <div className={styles["meal-price"]}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm meal={props.meal} />
      </div>
    </li>
  );
};

export default MealItem;
