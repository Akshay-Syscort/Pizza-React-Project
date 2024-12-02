import Pizza from "./Pizza";
import styles from "./Menu.module.css";
import prosciutto from "../assets/pizzas/prosciutto.jpg";
import focaccia from "../assets/pizzas/focaccia.jpg";
// import margherita from "../assets/pizzas/margherita.jpg";
// import Spinaci from "../assets/pizzas/Spinaci.jpg";
// import Salamino from "../assets/pizzas/Salamino.jpg";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "./src/assets/pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "./src/assets/pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "./src/assets/pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "./src/assets/pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "./src/assets/pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "./src/assets/pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const Menu = () => {
  return (
    <menu className={styles.menu}>
      <h1>Our Menu</h1>
      <li className={styles.pizzas}>
        {/* {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            photoName={pizza.photoName}
          ></Pizza>
        ))} */}
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza}></Pizza>
        ))}
      </li>
    </menu>
  );
};
export default Menu;
