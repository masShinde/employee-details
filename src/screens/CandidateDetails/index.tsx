import AssignedJobs from "../../components/AssignedJobs";
import BreadCrumbs from "../../components/BreadCrumbs";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Notes from "../../components/Notes";
import PersonalDetails from "../../components/PersonalDetails";
import Tabs from "../../components/Tabs";
import styles from "./styles.module.css";

const tabsData = [
  { label: "All Details", value: "allDetails" },
  { label: "Assigned Jobs", value: "assignedJobs" },
  { label: "Related Emails", value: "relatedEmails" },
  { label: "Candidate Questions", value: "candidateQuestions" },
  { label: "Hotlists", value: "hotlists" },
  { label: "Related Deals", value: "relatedDeals" },
  { label: "Contact(s) Pitched", value: "contactsPitched" },
];

export default function CandidateDetails() {
  return (
    <div className={styles.container}>
      <div className={styles.navbarWrapper}>
        <Navbar />
      </div>
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.mainContainer}>
            <div className={styles.breadCrumbsContainer}>
              <BreadCrumbs />
              <div className={styles.buttonContainer}>
                <Button
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  Request Profile Update
                </Button>
                <Button
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  Previous
                </Button>
                <Button
                  style={{
                    marginRight: "0.5rem",
                  }}
                >
                  Next
                </Button>
              </div>
            </div>
            <div className={styles.detailsContainer}>
              <PersonalDetails />
              <Tabs tabsData={tabsData} selectedIndex={2} />
              <AssignedJobs />
            </div>
          </div>
          <div className={styles.notesContainer}>
            <Notes />
          </div>
        </div>
      </div>
    </div>
  );
}
