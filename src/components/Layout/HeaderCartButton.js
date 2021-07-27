import React, { useContext } from "react";
import Button from "../UI/Button";
import CartIcon from "../Cart/CartIcon";
import FoodContext from "../../context/food-context";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const foodContext = useContext(FoodContext);

  return (
    <Button className={styles["button"]} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon />
      </span>
      <span className={styles["text"]}>Your Cart</span>
      <span className={styles["badge"]}>{foodContext.getItemsCount()}</span>
    </Button>
  );
};

export default HeaderCartButton;
