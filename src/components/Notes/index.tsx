import NoteItem from "../NoteItem";
import Tabs from "../Tabs";
import styles from "./styles.module.css";

const notesTabsData = [
  { label: "All", value: "all" },
  { label: "Notes & Calls", value: "notesAndCalls" },
  { label: "Tasks", value: "tasks" },
  { label: "Meeting", value: "meeting" },
  { label: "Files", value: "files" },
];

export default function Notes() {
  return (
    <div className={styles.notesContainer}>
      <div className={styles.notesTabContainer}>
        <Tabs
          tabsData={notesTabsData}
          selectedIndex={0}
          tabItemStyle={{
            padding: "0.2rem 1rem",
            fontSize: "0.75rem",
            color: "#343A40",
            fontWeight: 600,
            lineHeight: "100%",
          }}
          selectedItemStyle={{
            color: "#2570CA",
          }}
        />
      </div>
      <div className={styles.notesListContainer}>
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
        <NoteItem />
      </div>
    </div>
  );
}
