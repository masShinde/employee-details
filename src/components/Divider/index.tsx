import type { DividerPropsTypes } from "./dividerPropsTypes";
import styles from "./styles.module.css";

export default function Divider(props: DividerPropsTypes) {
  const { style, isVertical = false, length, containerStyle } = props;
  return (
    <div className={styles.dividerContainer} style={containerStyle}>
      <div
        style={{
          ...(isVertical
            ? { width: "1px", height: length || "100%" }
            : { height: "1px", width: "100%" }),
            backgroundColor: "#000",
          ...style,
        }}
      ></div>
    </div>
  );
}
