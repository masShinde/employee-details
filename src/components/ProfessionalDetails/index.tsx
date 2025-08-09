import KeyValuePair from "../KeyValuePair";
import type { ProfessionalDetailsPropsType } from "./ProfessionalDetailsTypes";
import styles from "./styles.module.css";

const professionalDetails = [
  { keyName: "Current Organization", value: "World Bank Group" },
  { keyName: "Summary", value: "Current Organization" },
  { keyName: "Skills", value: "HTML, CSS, Javascript" },
  { keyName: "Current Employment Status", value: "Employed" },
  { keyName: "Available From", value: "Jul, 14, 2023" },
  { keyName: "Date of Birth", value: "15 June 1993" },
  { keyName: "Current Salary", value: "$6000" },
  { keyName: "Relevent Experience", value: "7 Years" },
  { keyName: "Notice Period", value: "90 Days" },
  { keyName: "Salary Expectation", value: "$9000" },
  { keyName: "Full Address", value: "9400 Ashton Rd, Philadelphia" },
  { keyName: "Status", value: "Submitted to Client" },
  { keyName: "Resume", value: "Resume" },
  { keyName: "Salary Type", value: "Annual" },
  { keyName: "Total Experience", value: "5 Years" },
  { keyName: "Language Skills", value: "English(Elementary proficiency)" },
];

export default function ProfessionalDetails(
  props: ProfessionalDetailsPropsType
) {
  return (
    <div className={styles.professionalDetailsContainer}>
      {professionalDetails.map((detail, index) => (
        <div key={index} className={styles.keyValuePairContainer}>
          <KeyValuePair keyName={detail.keyName} value={detail.value} />
        </div>
      ))}
    </div>
  );
}
