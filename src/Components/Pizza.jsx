import styles from "./Pizza.module.css";
const Pizza = (props) => {
  return (
    <div className={styles.pizza}>
      <img src={props.pizzaObj.photoName} alt={props.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </div>
  );
};
export default Pizza;
