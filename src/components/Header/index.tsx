import Input from "../Input";
import styles from "./styles.module.css";
import logo from "../../assets/heading.svg";
import giftLogo from "../../assets/gift.svg";
import profileImage from "../../assets/Avatar.png";
import bellIcon from "../../assets/bell.svg";
import messagesGrayIcon from "../../assets/messages-gray.svg";
import Divider from "../Divider";
import Avatar from "../Avatar";
import searchIcon from "../../assets/search.svg";


const inputData = {
  placeholder: "Search Pipedrive",
  prefixIcon: searchIcon,
  name: "search",
};

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerLeft}>
        <div className={styles.inputWrapper}>
          <Input
            prefix={
              <Avatar source={inputData?.prefixIcon || ""}
                avatarClassNames={styles.prefixIcon}
              />
            }
             {...inputData}
          />
        </div>
      </div>
      <div className={styles.brandContainer}>
        <div className={styles.brandDetails}>
          <Avatar
            source={logo}
            avatarClassNames={styles.logo}
            containerClassNames={styles.logoContainer}
          />
          <div className={styles.brandName}>recruit crm</div>
        </div>
      </div>

      <div className={styles.headerRight}>
        <div className={styles.plusIconContainer}>
          <span className={styles.icon}>+</span>
        </div>
        <Divider
          isVertical
          style={{ height: "70%", width: "2px", backgroundColor: "#C8CCD2" }}
          containerStyle={{ height: "100%" }}
        />
        <Avatar
          source={giftLogo}
          avatarClassNames={styles.navIcon}
          containerClassNames={styles.iconContainer}
        />
        <Avatar
          source={giftLogo}
          avatarClassNames={styles.navIcon}
          containerClassNames={styles.iconContainer}
        />
        <Avatar
          source={messagesGrayIcon}
          avatarClassNames={styles.navIcon}
          containerClassNames={styles.iconContainer}
        />
        <Avatar
          source={bellIcon}
          avatarClassNames={styles.navIcon}
          containerClassNames={styles.iconContainer}
        />
        <div className={styles.profileContainer}>
          <Avatar
            source={profileImage}
            avatarClassNames={styles.avatarIcon}
            containerClassNames={styles.containerStyle}
          />
          <div className={styles.profileNameContainer}>
            <div className={styles.profileTitle}>Silicon Links Inc</div>
            <div className={styles.profileSubTitle}>Phyllis Yang</div>
          </div>
        </div>
      </div>
    </header>
  );
}
