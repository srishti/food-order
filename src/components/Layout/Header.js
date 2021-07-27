import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={styles["header"]}>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={props.showCartSummary} />
    </header>
  );
};

export default Header;
