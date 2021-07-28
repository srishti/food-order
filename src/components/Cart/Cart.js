import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const addMealItemToCartHandler = (item) => {
    const updatedItem = { ...item, quantity: 1 };
    cartContext.addItem(updatedItem);
  };

  const removeMealItemFromCartHandler = (itemId) => {
    cartContext.removeItem(itemId);
  };

  const placeOrderHandler = () => {
    alert("Ordered!");
  };

  const formattedAmount = `INR ${cartContext.totalAmount}`;
  const doesCartHasItems = cartContext.items.length > 0;

  const cartItemsListToRender = (
    <ul className={styles["cart-items-list"]}>
      {cartContext.items.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            item={meal}
            onAddItem={(item) => addMealItemToCartHandler(item)}
            onRemoveItem={(itemId) => removeMealItemFromCartHandler(itemId)}
          />
        );
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onHideCart}>
      {cartItemsListToRender}
      <div className={styles["total-cart-amount"]}>
        <h4>Total Amount</h4>
        <h4>{formattedAmount}</h4>
      </div>
      <div className={styles["modal-actions"]}>
        <Button onClick={props.onHideCart}>Close</Button>
        {doesCartHasItems && (
          <Button primary onClick={placeOrderHandler}>
            Order
          </Button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
