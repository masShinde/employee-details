import styles from "./styles.module.css";
import { CiMail } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaClockRotateLeft, FaRegCircleUser } from "react-icons/fa6";


export default function ContactDetails() {
  return (
    <div className={styles.contactDetailsContainer}>
      <div className={styles.mailContainer}>
        <div className={styles.mailIconContainer}>
          <CiMail className={styles.mailIcon} />
          <p className={styles.mailText}>williamsample@gmail.com</p>
        </div>
        <div className={styles.mailIconContainer}>
          <FiPhoneCall className={styles.mailIcon} />
          <p className={styles.mailText}>+91 9021232326</p>
        </div>
      </div>
      <div className={styles.mailContainer}>
        <div className={styles.mailIconContainer}>
          <FaRegCircleUser className={styles.mailIcon} />
          <p className={styles.dateText}>Phyllis Yang</p>
        </div>
        <div className={styles.mailIconContainer}>
          <FaClockRotateLeft className={styles.mailIcon} />
          <p className={styles.dateText}>Jul 14, 2023, 4:04 pm</p>
        </div>
      </div>
    </div>
  );
}
