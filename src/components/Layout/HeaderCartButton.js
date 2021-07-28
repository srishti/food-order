import React, { useState, useContext, useEffect } from "react";
import Button from "../UI/Button";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isCartButtonAnimated, setIsCartButtonAnimated] = useState(false);
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const cssClass = `${styles["button"]}${
    isCartButtonAnimated ? ` ${styles["bump"]}` : ""
  }`;

  useEffect(() => {
    if (items.length > 0) {
      setIsCartButtonAnimated(true);
    }
    const timer = setTimeout(() => {
      setIsCartButtonAnimated(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <Button className={cssClass} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span className={styles["text"]}>Your Cart</span>
      <span className={styles["badge"]}>{cartContext.totalItems}</span>
    </Button>
  );
};

export default HeaderCartButton;
