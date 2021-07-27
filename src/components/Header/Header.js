import React from "react";
import Cart from "../Cart/Cart";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles["header"]}>
      <h1>ReactMeals</h1>
      <Cart onClick={props.showCartSummary} />
    </header>
  );
};

export default Header;
