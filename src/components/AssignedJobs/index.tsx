import AssignedJobItem from "../AssignedJobItem";
import Button from "../Button";
import styles from "./styles.module.css";

export default function AssignedJobs() {
  return (
    <div className={styles.assignedJobsContainer}>
      <div className={styles.assignedJobsHeader}>
        <div className={styles.assignedJobsTitle}>
          Assigned Job to William Sample
        </div>
        <div className={styles.assignedJobsActions}>
          <Button
          type="primary"
            // style={{
            //   backgroundColor: "#2570CA",
            //   color: "#FFFFFF",
            //   marginRight: "0.5rem",
            //   padding: "0.5rem 0.75rem",
            //   borderRadius: "0.4rem",
            //   border: "none",
            //   cursor: "pointer",
            //   fontSize: "0.75rem",
            //   fontWeight: 600,
            // }}
          >
            Assign To Job
          </Button>
          <Button>View All Assigned Jobs</Button>
        </div>
      </div>
      <div className={styles.assignedJobsList}>
        <AssignedJobItem />
        <AssignedJobItem />
        <AssignedJobItem />
      </div>
    </div>
  );
}
