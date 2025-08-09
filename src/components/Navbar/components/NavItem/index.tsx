import type { NavItemPropsType } from "../../NavbarPropsTypes";
import styles from "./styles.module.css";

export default function NavItem(item: NavItemPropsType) {
  const { icon, alt, iconStyle, index } = item;
  return (
    <div key={`${alt}-${index}`} className={styles.logoContainer}>
      <img src={icon} alt={alt} className={`${styles.navIcon}`} style={iconStyle} />
    </div>
  );
}
