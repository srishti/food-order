import React, { useContext } from "react";
import Modal from "../UI/Modal";
import FoodContext from "../../context/food-context";
import Button from "../UI/Button";
import styles from "./CartSummary.module.css";

const CartSummary = (props) => {
  const foodContext = useContext(FoodContext);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (let i = 0; i < foodContext.selectedItems.length; i++) {
      totalAmount +=
        foodContext.selectedItems[i].price *
        foodContext.selectedItems[i].quantity;
    }
    return totalAmount.toFixed(2);
  };

  const decrementButtonHandler = (foodItemId) => {
    foodContext.decrement(foodItemId, 1);
  };

  const incrementButtonHandler = (foodItem) => {
    foodContext.increment(foodItem, 1);
  };

  const closeModalHandler = () => {};

  const placeOrderHandler = () => {
    alert("Ordered!");
  };

  return (
    foodContext.selectedItems.length > 0 && (
      <div>
        <Modal className={styles["modal"]}>
          <ul className={styles["items-list"]}>
            {foodContext.selectedItems.map((foodItem) => {
              return (
                <li key={foodItem.id} className={styles["item"]}>
                  <div className={styles["info"]}>
                    <h4>{foodItem.name}</h4>
                    <div className={styles["price-quantity"]}>
                      <span className={styles["price"]}>
                        {`INR ${foodItem.price.toFixed(2)}`}
                      </span>
                      <span className={styles["quantity"]}>
                        {`x ${foodItem.quantity}`}
                      </span>
                    </div>
                  </div>
                  <div className={styles["item-actions"]}>
                    <button
                      type="button"
                      onClick={() => decrementButtonHandler(foodItem.id)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={() => incrementButtonHandler(foodItem)}
                    >
                      +
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={styles["total-amount"]}>
            <h4>Total Amount</h4>
            <h4>{`INR ${getTotalAmount()}`}</h4>
          </div>
          <div className={styles["modal-actions"]}>
            <Button onClick={props.onCloseModal}>Close</Button>
            <Button primary onClick={placeOrderHandler}>
              Order
            </Button>
          </div>
        </Modal>
      </div>
    )
  );
};

export default CartSummary;
