import React from "react";
import Card from "../UI/Card";
import FoodItem from "./FoodItem";
import styles from "./FoodItems.module.css";

const foodItemsList = [
  {
    id: 1,
    name: "Veg Pulao",
    description: "Finest rice with beans",
    price: 150.0,
  },
  {
    id: 2,
    name: "Veg Salad",
    description: "Green leafy veggies",
    price: 50.0,
  },
  {
    id: 3,
    name: "Stuffed Parantha",
    description: "Vegetables inside layered wheat",
    price: 100.0,
  },
];

const FoodItems = () => {
  return (
    <section className={styles["food-items"]}>
      <Card className={styles["card"]}>
        <ul className={styles["food-items-list"]}>
          {foodItemsList.map((foodItem) => {
            return <FoodItem key={foodItem.id} data={foodItem} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default FoodItems;
