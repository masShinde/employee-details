import styles from "./styles.module.css";
import profileImage from "../../assets/profileIcon.svg";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";

import Button from "../Button";
import Toggle from "../Toggle";
import Avatar from "../Avatar";

export default function AssignedJobItem() {
  return (
    <div className={styles.assignedJobItemContainer}>
      <div className={styles.profileDetailsContainer}>
        <div className={styles.profileDetails}>
          <Avatar source={profileImage} avatarClassNames={styles.userAvatar} />
          <div className={styles.userDetails}>
            <div className={styles.userDetailsHeading}>
              <div className={styles.username}>Senior Product Manager</div>
            </div>
            <div className={styles.userDetailsSubHeading}>
              <div className={styles.subHeadingText}>Recruit CRM</div>
            </div>
          </div>
        </div>
        <div className={styles.profileInfoContainer}>
          <div className={styles.profileInfo}>
            <FaRegCircleUser className={styles.icons} />
            <p className={styles.profileInfoText}>William Sample</p>
          </div>
          <div className={styles.profileInfo}>
            <FaRegClock className={styles.icons} />
            <p className={styles.profileInfoText}>Jul 10, 2023</p>
          </div>
        </div>
      </div>
      <div className={styles.profileActionsContainer}>
        <div className={styles.buttonContainer}>
          <Button
            style={{
              fontWeight: 500,
              display: "flex",
              fontSize: "0.8rem",
              color: "#495057",
              border: "1px solid #F1F3F5",
              backgroundColor: "#F8F9FA",
              padding: "0.25rem 0.5rem",
            }}
          >
            Assigned
          </Button>
          <Button
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#343A40",
            }}
          >
            View Files
          </Button>
        </div>
        <div className={styles.toggleContainer}>
          <Toggle />
        </div>
      </div>
    </div>
  );
}
