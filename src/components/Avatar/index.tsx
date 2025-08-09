import { useMemo } from "react";
import styles from "./styles.module.css";
import type { AvatarPropsTypes } from "./AvatarPropsTypes";

export default function Avatar(props: AvatarPropsTypes) {
  const {
    imageStyle,
    source,
    containerStyle,
    avatarClassNames,
    containerClassNames,
  } = props;

  const type = useMemo(() => typeof source, [source]);

  return (
    <div style={containerStyle} className={containerClassNames}>
      <img style={imageStyle} src={source} className={avatarClassNames} />
    </div>
  );
}
