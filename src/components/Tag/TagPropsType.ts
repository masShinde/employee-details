import type { CSSProperties } from "react";

export interface TagPropsType {
  label: string;
  icon?: React.ComponentType<any>;
  onClick?: () => void;
  iconStyle?: CSSProperties;
  tagContainerStyle?: CSSProperties;
  iconContainerStyle?: CSSProperties;
  labelContainerStyle?: CSSProperties;
}
