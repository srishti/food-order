import React, { useState, useContext } from "react";
import Button from "../UI/Button";
import FoodContext from "../../context/food-context";
import styles from "./FoodItem.module.css";

const FoodItem = (props) => {
  const { id, name, description, price } = props.data;

  const [quantityText, setQuantityText] = useState("1");

  const foodContext = useContext(FoodContext);

  const changeQuantityHandler = (event) => {
    if (event.target.value) {
      setQuantityText(event.target.value);
    }
  };

  const addFoodItemHandler = () => {
    const foodItem = props.data;
    const quantity = +quantityText;
    foodContext.increment(foodItem, quantity);
  };

  return (
    <li className={styles["item"]}>
      <div className={styles["info"]}>
        <h4>{name}</h4>
        <em>{description}</em>
        <div className={styles["price"]}>{`INR ${price.toFixed(2)}`}</div>
      </div>
      <div className={styles["actions"]}>
        <div className={styles["quantity"]}>
          <label htmlFor="quantity">Quantity</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantityText}
            onChange={changeQuantityHandler}
          />
        </div>
        <Button primary onClick={addFoodItemHandler}>
          + Add
        </Button>
      </div>
    </li>
  );
};

export default FoodItem;
