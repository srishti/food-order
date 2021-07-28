import React, { useRef } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const quantityInputRef = useRef(null);

  const submitFormHandler = (event) => {
    event.preventDefault();
    const quantity = +quantityInputRef.current.value;
    props.onAddItemToCart(quantity);
  };

  return (
    <form className={styles["meal-item-form"]} onSubmit={submitFormHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        className={styles["meal-input"]}
        input={{
          id: `quantity_${props.mealId}`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <Button primary type="submit">
        + Add
      </Button>
    </form>
  );
};

export default MealItemForm;
