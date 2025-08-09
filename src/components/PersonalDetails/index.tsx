import { useState } from "react";
import ContactDetails from "./components/ContactDetails";
import ProfessionalDetails from "./components/ProfessionalDetails";
import ProfileDetails from "./components/ProfileDetails";
import fbIcon from "../../assets/fb.svg";
import xIcon from "../../assets/x.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/linkedin.svg";
import etcIcon from "../../assets/etc.svg";

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

const professionalDetails = [
  {
    name: "currentOrganization",
    keyName: "Current Organization",
    value: "World Bank Group",
  },
  { name: "summary", keyName: "Summary", value: "Current Organization" },
  { name: "skills", keyName: "Skills", value: "HTML, CSS, Javascript" },
  {
    name: "currentEmploymentStatus",
    keyName: "Current Employment Status",
    value: "Employed",
  },
  { name: "availableFrom", keyName: "Available From", value: "Jul, 14, 2023" },
  { name: "dateOfBirth", keyName: "Date of Birth", value: "15 June 1993" },
  { name: "currentSalary", keyName: "Current Salary", value: "$6000" },
  {
    name: "releventExperience",
    keyName: "Relevent Experience",
    value: "7 Years",
  },
  { name: "noticePeriod", keyName: "Notice Period", value: "90 Days" },
  { name: "salaryExpectation", keyName: "Salary Expectation", value: "$9000" },
  {
    name: "fullAddress",
    keyName: "Full Address",
    value: "9400 Ashton Rd, Philadelphia",
  },
  { name: "status", keyName: "Status", value: "Submitted to Client" },
  { name: "resume", keyName: "Resume", value: "Resume" },
  { name: "salaryType", keyName: "Salary Type", value: "Annual" },
  { name: "totalExperience", keyName: "Total Experience", value: "5 Years" },
  {
    name: "languageSkills",
    keyName: "Language Skills",
    value: "English(Elementary proficiency)",
  },
];

export default function PersonalDetails() {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditClick = (e: React.MouseEvent) => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <ProfileDetails
        isEdit={isEdit}
        socialIcons={socialIcons}
        handleEditClick={handleEditClick}
      />
      <ContactDetails />
      <ProfessionalDetails details={professionalDetails} isEdit={isEdit} />
    </>
  );
}
