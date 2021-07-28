import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import CartContext from "../../store/cart-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  /**
   * Function as event handler to add an item to the cart
   * @param {Object} item - item to be added to cart
   */
  const incrementCartItemHandler = (item) => {
    const updatedItem = { ...item, quantity: 1 };
    cartContext.addItem(updatedItem);
  };

  /**
   * Function as event handler to remove an item from the cart
   * @param {String} itemId - ID of item to be removed from cart
   */
  const decrementCartItemHandler = (itemId) => {
    cartContext.removeItem(itemId);
  };

  /**
   * Function as event handler to place an order with given items in cart
   */
  const placeOrderHandler = () => {
    alert("Ordered!");
  };

  const formattedAmount = `INR ${cartContext.totalAmount}`;
  const doesCartHasItems = cartContext.items.length > 0; // determines if 'Order' button should be displayed

  // markup for meal items to be rendered inside the cart
  const cartItemsListToRender = (
    <ul className={styles["cart-items-list"]}>
      {cartContext.items.map((meal) => {
        return (
          <CartItem
            key={meal.id}
            item={meal}
            onIncrementItem={(item) => incrementCartItemHandler(item)}
            onDecrementItem={(itemId) => decrementCartItemHandler(itemId)}
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
