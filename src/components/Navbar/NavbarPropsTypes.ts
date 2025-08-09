import type { CSSProperties } from "react";

export interface NavbarPropsType {}

export interface NavItemPropsType {
  icon?: string;
  alt?: string;
  iconStyle?: CSSProperties;
  index?: number;
}
