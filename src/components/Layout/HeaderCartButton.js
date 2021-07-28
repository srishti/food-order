import React, { useContext } from "react";
import Button from "../UI/Button";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);

  return (
    <Button className={styles["button"]} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span className={styles["text"]}>Your Cart</span>
      <span className={styles["badge"]}>{cartContext.items.length}</span>
    </Button>
  );
};

export default HeaderCartButton;
