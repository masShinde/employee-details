import type { CSSProperties } from "react";

export interface AvatarPropsTypes {
  imageStyle?: CSSProperties;
  source: string;
  containerStyle?: CSSProperties;
  avatarClassNames?: string;
  containerClassNames?: string;
}