export interface ProfessionalDetail {
  keyName: string;
  value: string;
  name: string;
}

export interface ProfessionalDetailsPropsType {
  details: ProfessionalDetail[];
  isEdit?: boolean;
}