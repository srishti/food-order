import React, { useState, useContext } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import CartContext from "../../../store/cart-context";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [quantityText, setQuantityText] = useState("1");

  const cartContext = useContext(CartContext);

  const changeQuantityHandler = (event) => {
    if (event.target.value) {
      setQuantityText(event.target.value);
    }
  };

  const addMealHandler = () => {
    const quantity = +quantityText;
    cartContext.addItem(props.meal, quantity);
  };

  return (
    <form className={styles["meal-item-form"]}>
      <Input
        label="Quantity"
        className={styles["meal-input"]}
        input={{
          id: `quantity_${props.meal.id}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          value: quantityText,
          onChange: changeQuantityHandler,
        }}
      />
      <Button primary onClick={addMealHandler}>
        + Add
      </Button>
    </form>
  );
};

export default MealItemForm;
