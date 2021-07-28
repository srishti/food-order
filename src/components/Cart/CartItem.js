import React, { useContext } from "react";
import styles from "./CartItem.module.css";

const CartItem = (props) => {
  const { id, name, price, quantity } = props.item;

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
        <button type="button" onClick={() => props.onDecrementItem(id)}>
          -
        </button>
        <button type="button" onClick={() => props.onIncrementItem(props.item)}>
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
