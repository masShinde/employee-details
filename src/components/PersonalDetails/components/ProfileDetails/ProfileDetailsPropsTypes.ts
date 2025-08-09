export interface SocialIconType {
  name: string;
  icon: string;
}

export interface ProfileDetailsPropsType {
  socialIcons: SocialIconType[];
  isEdit?: boolean;
  handleEditClick?: (e: React.MouseEvent) => void;
}
