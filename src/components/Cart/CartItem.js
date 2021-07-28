import React, { useContext } from "react";
import FoodContext from "../../context/food-context";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const foodContext = useContext(FoodContext);

  const { id, name, price, quantity } = props.item;

  const decrementButtonHandler = (foodItemId) => {
    foodContext.decrement(foodItemId, 1);
  };

  const incrementButtonHandler = (foodItem) => {
    foodContext.increment(foodItem, 1);
  };

  return (
    <li className={styles["cart-item"]}>
      <div className={styles["item-info"]}>
        <h4>{name}</h4>
        <div className={styles["item-price-quantity"]}>
          <span className={styles["item-price"]}>
            {`INR ${price.toFixed(2)}`}
          </span>
          <span className={styles["item-quantity"]}>{`x ${quantity}`}</span>
        </div>
      </div>
      <div className={styles["item-actions"]}>
        <button type="button" onClick={() => decrementButtonHandler(id)}>
          -
        </button>
        <button
          type="button"
          onClick={() => incrementButtonHandler(props.item)}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
