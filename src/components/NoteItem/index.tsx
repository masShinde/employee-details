import Tag from "../Tag";
import styles from "./styles.module.css";
import { IoIosDocument } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { CiClock2 } from "react-icons/ci";

const tagsData = [
  {
    label: "Note",
    icon: IoIosDocument,
    iconStyle: { width: "0.45rem", height: "0.45rem", color: "#2570CA" },
    labelContainerStyle: {
      color: "#2570CA",
    },
    iconContainerStyle: {
      width: "1.25rem",
      height: "1.25rem",
      borderRadius: "50%",
      backgroundColor: "#E6F1FF",
    },
  },
  {
    label: "To Do",
    labelContainerStyle: {
      backgroundColor: "#F1F3F5",
      padding: "0.2rem 0.45rem",
      borderRadius: "0.3rem",
    },
  },
];

export default function NoteItem() {
  return (
    <div className={styles.noteItemContainer}>
      <div className={styles.tagsList}>
        {tagsData.map((tag, index) => (
          <Tag key={index} {...tag} />
        ))}
      </div>
      <div className={styles.noteContent}>
        Lorem dolore sit et aute cupidatat eu Lorem tempor proident consequat.
        In dolore mollit laborum ex cillum laboris occaecat ipsum Lorem
        cupidatat.
      </div>
      <div className={styles.noteAssociations}>
        <Tag
          label="1 Association(s)"
          labelContainerStyle={{
            color: "#2570CA",
          }}
        />
      </div>
      <div className={styles.creatorInfo}>
        <div className={styles.creatorName}>
          <Tag
            icon={FaRegCircleUser}
            iconStyle={{
              width: "0.75rem",
              height: "0.75rem",
              color: "#495057",
            }}
            label="John Doe"
            labelContainerStyle={{
              fontWeight: 400,
              fontSize: "0.75rem",
              color: "#000000",
            }}
          />
        </div>
        <div className={styles.creationTime}>
          <Tag
            icon={CiClock2}
            iconStyle={{
              width: "0.75rem",
              height: "0.75rem",
              color: "#495057",
            }}
            iconContainerStyle={{ marginRight: 0 }}
            label="Jul 12, 2023, 11:54 am"
          />
        </div>
      </div>
    </div>
  );
}
