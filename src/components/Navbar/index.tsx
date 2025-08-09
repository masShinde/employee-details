import menuIcon from "../../assets/menu.svg";
import profileIcon from "../../assets/profile.svg";
import departmentIcon from "../../assets/departmentIcon.svg";
import professionalIcon from "../../assets/professional.svg";
import messagesIcon from "../../assets/messages.svg";
import calendarIcon from "../../assets/calendar.svg";
import settingsIcon from "../../assets/settings.svg";
import moneyIcon from "../../assets/money.svg";
import optionsIcon from "../../assets/options.svg";
import pieChartIcon from "../../assets/pieChart.svg";
import creditCardIcon from "../../assets/creditcard.svg";
import notificationsIcon from "../../assets/notifications.svg";
import styles from "./styles.module.css";
import type { NavbarPropsType } from "./NavbarPropsTypes";
import NavDivider from "./components/NavDivider";
import NavItem from "./components/NavItem";

const navbarItems = [
  { icon: menuIcon, alt: "Menu" },
  { icon: profileIcon, alt: "Profile", classNames: [styles.profileIcon] },
  { icon: departmentIcon, alt: "Department" },
  { icon: notificationsIcon, alt: "Notifications" },
  { icon: professionalIcon, alt: "Experience" },
  { icon: messagesIcon, alt: "Messages" },
  { icon: calendarIcon, alt: "Calendar", showDivider: true },
  { icon: moneyIcon, alt: "Compensation" },
  { icon: pieChartIcon, alt: "Analytics" },
  { icon: creditCardIcon, alt: "Payments" },
  { icon: settingsIcon, alt: "Settings" },
  { icon: optionsIcon, alt: "Options" },
];

export default function Navbar(props: NavbarPropsType) {
  return (
    <nav className={styles.navbar}>
      {navbarItems?.map((item, index) => {
        const { showDivider = false } = item;
        const Item = showDivider ? (
          <NavDivider key={index} />
        ) : (
          <NavItem key={index} {...item} index={index} />
        );
        return Item;
      })}
    </nav>
  );
}
