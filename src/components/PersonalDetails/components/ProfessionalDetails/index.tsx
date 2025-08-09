import { useState } from "react";
import KeyValuePair from "../../../KeyValuePair";
import type { ProfessionalDetailsPropsType } from "./ProfessionalDetailsTypes";
import styles from "./styles.module.css";
import Input from "../../../Input";

export default function ProfessionalDetails(
  props: ProfessionalDetailsPropsType
) {
  const { details, isEdit } = props;

  const [professionalDetails, setProfessionalDetails] = useState(details || {});

  const handleOnInputChange = (event: React.InputEvent<HTMLInputElement>) => {
    const { value, id } = event.target as HTMLInputElement;
    const index = +id?.split("-")?.[1];
    const newProfessionalDetails = [...professionalDetails];
    const targetDetails = newProfessionalDetails?.[index];
    if (!targetDetails) return;
    const updatedDetails = { ...targetDetails, value: value };
    newProfessionalDetails[index] = updatedDetails;
    setProfessionalDetails(newProfessionalDetails);
  };

  return (
    <div className={styles.professionalDetailsContainer}>
      {professionalDetails.map((detail, index) => (
        <div key={index} className={styles.keyValuePairContainer}>
          {isEdit ? (
            <Input
              containerStyle={{
                padding: "0.5rem 2rem",
              }}
              id={`input-${index}`}
              onChange={handleOnInputChange}
              labelText={detail?.keyName}
              {...detail}
            />
          ) : (
            <KeyValuePair keyName={detail.keyName} value={detail.value} />
          )}
        </div>
      ))}
    </div>
  );
}
