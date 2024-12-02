import styles from "../Components/Footer.module.css";
const Footer = () => {
  const hours = new Date().getHours();
  const open = 11;
  const close = 23;
  let isopen = hours >= open && hours <= close;
  return (
    <div className={styles.footer}>
      <div className={styles.order}>
        {isopen ? (
          <p>{new Date().toLocaleString()} We are currently Open</p>
        ) : (
          <h1>We are currently close</h1>
        )}
      </div>
      {/* // <p>{new Date().toLocaleString()} We are currently Open</p> */}
      <button className={styles.btn}>Order</button>
    </div>
  );
};
export default Footer;
