import styles from "./styles.module.css";
import profileImage from "../../../../assets/profileIcon.svg";
import { IoIosStar } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

import Button from "../../../Button";
import type { ProfileDetailsPropsType } from "./ProfileDetailsPropsTypes";

export default function ProfileDetails(props: ProfileDetailsPropsType) {
  const { socialIcons, isEdit, handleEditClick } = props;
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
          <Button type="error">Contact Linked</Button>
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
            onClick={handleEditClick}
          >
            {isEdit ? (
              <p style={{ margin: 0 }}>Submit</p>
            ) : (
              <MdModeEditOutline className={styles.buttonIcons} />
            )}
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
