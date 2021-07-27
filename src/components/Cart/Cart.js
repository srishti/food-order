import React, { useContext } from "react";
import FoodContext from "../../context/food-context";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const foodContext = useContext(FoodContext);

  return (
    <article className={styles["cart"]} onClick={props.onClick}>
      <h4 className={styles["label"]}>Your Cart</h4>
      <div className={styles["items-count"]}>
        <span>{foodContext.getItemsCount()}</span>
      </div>
    </article>
  );
};

export default Cart;
