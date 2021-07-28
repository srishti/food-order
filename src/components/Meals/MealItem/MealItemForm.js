import React, { useState, useRef } from "react";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const quantityInputRef = useRef(null);
  const [isFormValid, setIsFormValid] = useState(true);

  let cssClass = styles["meal-input"];
  if (!isFormValid) {
    cssClass = `${cssClass} ${styles["invalid"]}`;
  }

  /**
   * Function invoked as event handler when the form is submitted by clicking on Add button
   * @param {Object} event - event fired against the event handler
   */
  const submitFormHandler = (event) => {
    event.preventDefault();
    const quantity = +quantityInputRef.current.value;
    if (quantity && quantity > 0 && quantity < 6) {
      setIsFormValid(true);
      props.onAddItemToCart(quantity);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form className={styles["meal-item-form"]} onSubmit={submitFormHandler}>
      <Input
        ref={quantityInputRef}
        label="Quantity"
        className={cssClass}
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
