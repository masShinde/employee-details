import styles from "./styles.module.css";
import profileImage from "../../assets/profileIcon.svg";
import fbIcon from "../../assets/fb.svg";
import xIcon from "../../assets/x.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/linkedin.svg";
import etcIcon from "../../assets/etc.svg";
import { IoIosStar } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

import Button from "../Button";

const socialIcons = [
  {
    name: "facebook",
    icon: fbIcon,
    link: "https://www.facebook.com",
  },
  {
    name: "twitter",
    icon: xIcon,
    link: "https://www.twitter.com",
  },
  {
    name: "linkedin",
    icon: linkedinIcon,
    link: "https://www.linkedin.com",
  },
  {
    name: "github",
    icon: githubIcon,
    link: "https://www.github.com",
  },
  {
    name: "etc",
    icon: etcIcon,
    link: "https://www.etc.com",
  },
];

export default function ProfileDetails() {
  return (
    <div className={styles.profileDetailsContainer}>
      <div className={styles.profileDetails}>
        <img className={styles.userAvatar} src={profileImage} />
        <div className={styles.userDetails}>
          <div className={styles.userDetailsHeading}>
            <div className={styles.username}> William Sample</div>
            <div className={styles.socialContainer}>
              {socialIcons.map((social, index) => (
                <img
                  className={styles.socialIcon}
                  key={index}
                  alt={social?.name}
                  src={social?.icon}
                />
              ))}
            </div>
          </div>
          <div className={styles.userDetailsSubHeading}>
            <div className={styles.subHeadingText}>Senior Product Manager</div>
            <div className={styles.subHeadingText}>United States</div>
            <div className={styles.subHeadingText}>Dallas</div>
          </div>
        </div>
      </div>
      <div className={styles.profileActionsContainer}>
        <div className={styles.buttonContainer}>
          <Button
            // style={{
            //   marginRight: "0.5rem",
            //   color: "#E03131",
            //   fontSize: "0.8rem",
            //   fontWeight: 500,
            //   backgroundColor: "#FCEAEA",
            //   border: "1px solid #F6C1C1",
            // }}
            type="error"
          >
            Contact Linked
          </Button>
          <Button
            style={{
              marginRight: "0.5rem",
            }}
          >
            <IoIosStar className={styles.buttonIcons} />
          </Button>
          <Button
            style={{
              marginRight: "0.5rem",
            }}
          >
            <FaFire className={styles.buttonIcons} />
          </Button>
          <Button
            style={{
              marginRight: "0.5rem",
            }}
          >
            <MdModeEditOutline className={styles.buttonIcons} />
          </Button>
          <Button
            style={{
              marginRight: "1rem",
            }}
          >
            <SlOptionsVertical className={styles.buttonIcons} />
          </Button>
        </div>
      </div>
    </div>
  );
}
