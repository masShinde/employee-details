import styles from "./styles.module.css";

export default function NavDivider() {
  return (
    <div className={styles.dividerContainer}>
      {" "}
      <hr className={styles.itemDivider} />
    </div>
  );
}
