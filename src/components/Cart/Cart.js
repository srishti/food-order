import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import FoodContext from "../../context/food-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
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

  const placeOrderHandler = () => {
    alert("Ordered!");
  };

  const cartItemsListToRender = (
    <ul className={styles["cart-items-list"]}>
      {foodContext.selectedItems.map((meal) => {
        return <CartItem key={meal.id} item={meal} />;
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItemsListToRender}
      <div className={styles["total-cart-amount"]}>
        <h4>Total Amount</h4>
        <h4>{`INR ${getTotalAmount()}`}</h4>
      </div>
      <div className={styles["modal-actions"]}>
        <Button onClick={props.onHideCart}>Close</Button>
        <Button primary onClick={placeOrderHandler}>
          Order
        </Button>
      </div>
    </Modal>
  );
};

export default Cart;
