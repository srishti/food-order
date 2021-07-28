import React, { useContext } from "react";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import styles from "./MealItem.module.css";

const MealItem = (props) => {
  const { name, description, price } = props.meal;

  const cartContext = useContext(CartContext);

  const formattedPrice = `INR ${price.toFixed(2)}`;

  const addItemToCartHandler = (quantity) => {
    const updatedMeal = { ...props.meal, quantity };
    cartContext.addItem(updatedMeal);
  };

  return (
    <li className={styles["meal-item"]}>
      <div className={styles["meal-info"]}>
        <h4>{name}</h4>
        <em>{description}</em>
        <div className={styles["meal-price"]}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm
          mealId={props.meal.id}
          onAddItemToCart={(quantity) => addItemToCartHandler(quantity)}
        />
      </div>
    </li>
  );
};

export default MealItem;
