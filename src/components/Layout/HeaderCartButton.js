import React, { useState, useContext, useEffect } from "react";
import Button from "../UI/Button";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false); // determines if the animation class `bump` should be applied on cart button (to show an animation) when an item is added to cart
  const cartContext = useContext(CartContext);

  const { items } = cartContext;

  const cssClass = `${styles["button"]}${
    isAnimationVisible ? ` ${styles["bump"]}` : ""
  }`;

  useEffect(() => {
    if (items.length > 0) {
      // if the cart has atleast one item, show the animation on the cart button
      setIsAnimationVisible(true);
    }
    const timer = setTimeout(() => {
      /**
       * DEBOUNCING
       * Reset animation after 300ms to add another animation after elapsed time of 300ms
       * All items which are added to cart within 300ms will show a single animation
       * (300ms = animation time in CSS file)
       */
      setIsAnimationVisible(false);
    }, 300);
    return () => {
      // clear out timer before setting a new one to avoid multiple timers being set up
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
