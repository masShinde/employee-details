import { useState } from "react";
import styles from "./styles.module.css";

export default function Toggle() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log("Toggle clicked");
    if (event.target === event.currentTarget)
    setIsChecked(!isChecked);
  };


  return (
    <div onClick={handleToggleChange} className={styles.toggleContainer}>
      <label htmlFor="toggle" className={styles.switch}>
        <input
          id="toggle"
          name="toggle"
          checked={isChecked}
          className={styles.checkboxInput}
          type="checkbox"
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
